import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../../../env';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = new BehaviorSubject<User|undefined>(undefined);
  token: string = '';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    
    // Load the current user if an access token exists
    let token = localStorage.getItem('auth-token');
    this.token = token ? token : '';
    if (this.token) setTimeout(() => this.getUser(), 1000);

    // Update the token on user change and handle redirection
    this.user$.subscribe((user: User|undefined) => {
      this.token = user?.accessToken ? user?.accessToken : '';
      if (user?.accessToken) localStorage.setItem('auth-token', user?.accessToken);
      this.router.navigate([user ? '/' : '/login']);
    });

  }

  login(email?: string, password?: string) {
    let url = `${env.backend}auth/login/`;
    let payload = JSON.stringify({ email: email, password: password });
    this.http.post(url, email ? payload : undefined, { headers: this.headers }).subscribe({
      next: (user: any) => this.user$.next(new User(user)),
      error: () => this.user$.next(undefined)
    });
  }

  getUser() {
    this.http.get(`${env.backend}auth/login/`, { headers: this.headers }).subscribe({
      next: (user: any) => this.user$.next(new User(user)),
      error: () => this.user$.next(undefined)
    });
  }

  signup(user: User) {
    let url = `${env.backend}auth/signup/`;
    let payload = JSON.stringify(user);
    this.http.post(url, payload, { headers: this.headers }).subscribe();
  }

  logout(): void {
    localStorage.setItem('auth-token', '');
    this.user$.next(undefined);
  }

}
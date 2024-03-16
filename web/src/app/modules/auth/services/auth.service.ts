import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { EnvService } from 'src/app/env.service';

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
    private router: Router,
    private envService: EnvService
  ) {
    
    // Load the current user if an access token exists
    let token = localStorage.getItem('auth-token');
    this.token = token ? token : '';
    if (this.token) setTimeout(() => this.getUser(), 1000);

    // Update the token on user change and handle redirection
    this.user$.subscribe((user: User|undefined) => {
      this.token = user?.accessToken ? user?.accessToken : '';
      if (user?.accessToken) localStorage.setItem('auth-token', user?.accessToken);
      this.router.navigate([user?.isActivated ? '/' : '/login']);
    });

  }

  login(email?: string, password?: string) {
    let baseUrl = this.envService.getBaseUrl();
    let url = `${baseUrl}auth/login/`;
    let payload = JSON.stringify({ email: email, password: password });
    this.http.post(url, email ? payload : undefined, { headers: this.headers }).subscribe({
      next: (user: any) => this.user$.next(new User(user)),
      error: () => this.user$.next(undefined)
    });
  }

  getUser() {
    let baseUrl = this.envService.getBaseUrl();
    this.http.get(`${baseUrl}auth/login/`, { headers: this.headers }).subscribe({
      next: (user: any) => this.user$.next(new User(user)),
      error: () => this.user$.next(undefined)
    });
  }

  sendActivationMail() {
    let baseUrl = this.envService.getBaseUrl();
    this.http.get(`${baseUrl}auth/sendmail/`, { headers: this.headers }).subscribe();
  }

  activate(email: string, token: string) {
    let baseUrl = this.envService.getBaseUrl();
    this.http.post(`${baseUrl}auth/activate/`, { email: email, activationToken: token }, { headers: this.headers }).subscribe({
      next: (user: any) => this.user$.next(new User(user)),
      error: () => this.user$.next(undefined)
    });
  }

  deleteAccount() {
    let baseUrl = this.envService.getBaseUrl();
    this.http.delete(`${baseUrl}auth/delete/`).subscribe(() => this.logout());
  }

  signup(user: User) {
    let baseUrl = this.envService.getBaseUrl();
    let url = `${baseUrl}auth/signup/`;
    let payload = JSON.stringify(user);
    this.http.post(url, payload, { headers: this.headers }).subscribe();
  }

  logout(): void {
    localStorage.setItem('auth-token', '');
    this.user$.next(undefined);
  }

}
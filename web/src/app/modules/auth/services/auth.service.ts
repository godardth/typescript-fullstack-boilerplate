import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../../../env';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token$ = new BehaviorSubject<string>('');
  user$?: Observable<User|undefined>;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    
    // Recover token from local storage
    let savedToken = localStorage.getItem('auth-token');
    if (savedToken) this.token$.next(savedToken);
    
    // Save token to local storage on every change
    this.token$.subscribe((token: string) => localStorage.setItem('auth-token', token));

    // Fetch user on token change
    this.user$ = this.token$.pipe(
      map((token: string) => token ? new User({firstName: 'Test'}) : undefined)
    );

    // Redirect to either home or login page on user value udpate
    this.user$.subscribe((user: User|undefined) => {
      this.router.navigate([user ? '/' : '/login']);
    });

  }

  login(email: string, password: string) {
    let url = env.backend + 'auth/login/';
    let payload = JSON.stringify({email: email, password: password});
    this.http.post(url, payload, {headers: this.headers}).subscribe({
      next: (v: any) => this.token$.next(v['access_token']),
      error: (err: any) => this.token$.next('')
    })
  }

  logout(): void {
    this.token$.next('');
  }

}
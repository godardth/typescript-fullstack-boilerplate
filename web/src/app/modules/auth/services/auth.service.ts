import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../../../env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  isAuthenticated(): boolean {
    return localStorage.getItem('auth-token') ? true : false;
  }

  login(email: string, password: string) {
    this.http.post(env.backend + 'auth/login/',
      JSON.stringify({email: email, password: password}),
      {headers: this.headers}
    ).subscribe({
        next: (v: any) => {
          localStorage.setItem('auth-token', v['access_token'] );
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          this.logout(); 
          throw err; 
        },
        complete: undefined 
    })
  }

  getAuthToken(): string|null {
    return localStorage.getItem('auth-token');
  }

  logout(): void {
    localStorage.removeItem('auth-token');
    this.router.navigate(['/login']);
  }

}
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private authService: AuthService,
		private router: Router
  ) {}

  canActivate() {
    let authToken = localStorage.getItem('auth-token');
    let loggedIn = authToken ? true : false;
    if (!loggedIn) this.router.navigate(['/login']);
    return true;
  }
}
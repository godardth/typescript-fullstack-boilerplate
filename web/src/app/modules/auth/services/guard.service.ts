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
    let loggedIn = this.authService.isAuthenticated();
    if (!loggedIn) this.router.navigate(['/login']);
    return true;
  }
}
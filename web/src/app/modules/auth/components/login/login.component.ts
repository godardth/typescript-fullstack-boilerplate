import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(protected authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get emailErrors() { return this.loginForm.get('email')?.errors; }
  get passwordErrors() { return this.loginForm.get('password')?.errors; }

  onSubmit() {
    let email = this.loginForm.get('email')?.value;
    let pwd = this.loginForm.get('password')?.value;
    if (email && pwd) this.authService.login(email, pwd);
  }

  sendActivationLink() {
    this.authService.sendActivationMail();
  }

}

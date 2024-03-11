import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get emailErrors() { return this.loginForm.get('email')?.errors; }
  get passwordErrors() { return this.loginForm.get('password')?.errors; }

  onSubmit() {
    // TO-DO
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {

  constructor(private authService: AuthService) {}

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });

  get emailErrors() { return this.signupForm.get('email')?.errors; }
  get passwordErrors() { return this.signupForm.get('password')?.errors; }
  get firstNameErrors() { return this.signupForm.get('firstName')?.errors; }
  get lastNameErrors() { return this.signupForm.get('lastName')?.errors; }

  onSubmit() {
    let email = this.signupForm.get('email')?.value;
    let pwd = this.signupForm.get('password')?.value;
    let firstName = this.signupForm.get('firstName')?.value;
    let lastName = this.signupForm.get('lastName')?.value;
    if (!email || !pwd || !firstName || !lastName) return;
    let user = new User({
      email: email,
      password: pwd,
      firstName: firstName,
      lastName: lastName
    });
    this.authService.signup(user);
  }

}

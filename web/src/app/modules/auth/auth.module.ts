import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { GuardService } from './services/guard.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatTabsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginSignupComponent
  ],
  providers: [
    AuthService,
    GuardService
  ],
  exports: [
    LoginSignupComponent
  ]
})
export class AuthModule { }

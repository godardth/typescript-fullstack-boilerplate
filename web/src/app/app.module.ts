import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DemoComponent } from './components/demo/demo.component';
import { AuthInterceptor } from './modules/auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    DemoComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

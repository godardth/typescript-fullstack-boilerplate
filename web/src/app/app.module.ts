import { NgModule } from '@angular/core';
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

@NgModule({
  imports: [
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
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

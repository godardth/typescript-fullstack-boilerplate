import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app-component/app.component';
import { AuthModule } from './modules/auth/auth.module';
import { AuthInterceptor } from './modules/auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvService } from './env/env.service';
import { DemoModule } from './modules/demo/demo.module';
import { routes } from './app.routing';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AuthModule,
    DemoModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    EnvService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
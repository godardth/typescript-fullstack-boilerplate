import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GuardService } from './modules/auth/services/guard.service';
import { DemoComponent } from './components/demo/demo.component';
import { LoginSignupComponent } from './modules/auth/components/login-signup/login-signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginSignupComponent
      },
      {
        path: '',
        canActivate: [ GuardService ],
        component: DemoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.sass']
})
export class LoginSignupComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(queryParams => {
      let email = queryParams.get("email");
      let activationToken = queryParams.get("activationToken");
      if (email && activationToken) {
        this.authService.activate(email, activationToken);
      }
    });
  }

  

}

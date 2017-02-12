import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth-service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe(loggedIn => {
          if (loggedIn) {
            this.router.navigate(['/home']);
          } else {
            // Something happened!
          }
        },
        error => {

        })
  }
}

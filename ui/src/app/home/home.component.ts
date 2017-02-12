import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth-service/auth.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Http, Headers, RequestOptions} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private user: {name: string};

  constructor(private http: Http,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

    const userUrl = environment.apiUrl + '/users';

    const headers = new Headers();
    headers.append('x-access-token', localStorage.getItem('token'));
    let options = new RequestOptions({headers: headers});
    this.http.get(userUrl, options).subscribe(response => {
        if (response.status === 200) {
          this.user = response.json();
        }
      },
      error => {
        // Something happened!
      })
  }

  logout() {
    this.authService.logout()
      .subscribe(loggedOut => {

        if (loggedOut) {
          this.router.navigate(['/login']);
        } else {
          // Something happened!
        }
      })
  }
}

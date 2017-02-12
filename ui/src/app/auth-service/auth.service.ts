import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Headers} from "@angular/http";
import {Router} from "@angular/router";
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  authApi: string = environment.apiUrl + '/auth';

  constructor(private http: Http,
              private router: Router) {
    this.loadState();
  }

  private loadState() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  public login(email: String, password: String) {
    const body = {email, password};
    return this.http.post(this.authApi, body).map(response => {
      this.isLoggedIn = response.status === 200;
      if (this.isLoggedIn) {
        localStorage.setItem('token', '' + response.text());
      }
      return this.isLoggedIn;
    })
  }

  public logout() {
    return this.http.delete(this.authApi)
      .map(response => {
        this.isLoggedIn = response.status !== 200;
        localStorage.removeItem('token');
        return !this.isLoggedIn;
      });
  }
}

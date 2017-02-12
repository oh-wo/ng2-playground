import {Injectable} from "@angular/core";
import {
  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot,
  ActivatedRoute
} from "@angular/router";
import {AuthService} from "../auth-service/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {

    if (this.authService.isLoggedIn) {
      if (this.route.snapshot.data['publicPage']) {
        this.router.navigate(['/home']);
      }
      return true;
    } else {
      if (!this.route.snapshot.data['publicPage']) {
        this.router.navigate(['/login']);
      }
      return false;
    }
  }
}

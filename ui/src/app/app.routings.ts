// Route Configuration
import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth-guard/auth-guard.service";
export const routes: Routes = [
  {
    path: 'login', component: LoginComponent, data: {publicPage: true}
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {path: '', component: LoginComponent},
  {path: '**', component: LoginComponent}
];

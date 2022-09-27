import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isAuthenticated:boolean=false;
  //constructor of userservice
  constructor(
    private authService: UserService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      var isAuthenticated= this.authService.authSubject.subscribe(
        data => 
        {
          console.log('next subscribed value: ' + data);
          this.isAuthenticated = data;
        })
 
      if ( this.isAuthenticated==false) {
        console.log('inside false ' + this.isAuthenticated);
          this.router.navigate(['/login']);
          return false;
      }else {
        console.log('next subscribed value:t3etg ' + this.isAuthenticated);
        //this.router.navigate(['/Home']);
        return true;
      
      }
  }
  
}

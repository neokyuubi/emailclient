import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService:AuthService, private router:Router){}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    console.log("guard");
    // return true
    return this.authService.signedIn$.pipe(
      skipWhile(value=> value == null),
      take(1),
      tap((authenticated)=>{
        if(!authenticated)
        {
          this.router.navigateByUrl("/");
        }
      })
      )
  }
}

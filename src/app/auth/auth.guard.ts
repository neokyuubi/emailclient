import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService:AuthService, private router:Router){}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    console.log("guard");
    return this.authService.signedIn$.pipe(
      skipWhile(value => {
        console.log("skipWhile", value);
        return value == null
      }),
      take(1),
      tap((authenticated)=>{
        console.log("tap", authenticated);
        if(!authenticated)
        {
          console.log("authenticated", authenticated);
          this.router.navigateByUrl("/");
        }
      })
    )
  }
}

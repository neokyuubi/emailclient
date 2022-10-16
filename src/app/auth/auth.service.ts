import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsernameResult } from './username-result.boolean';
import { SignupRequestBody } from './signup/signup-request-body';
import { SignupResponse } from './signup/signup-response';
import { BehaviorSubject, tap } from 'rxjs';
import { CheckAuthResponse } from './CheckAuthResponse';
import { SigninResponse } from './signin/signin-response';
import { SigninRequest } from './signin/signin-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlPrefix:string = "https://api.angular-email.com/auth/";
  signedIn$:BehaviorSubject<any> = new BehaviorSubject(null);
  username:string = '';

  constructor(private http:HttpClient) {
  }

  usernameAvailable(username:string)
  {   
    return this.http.post<UsernameResult>(`${this.urlPrefix}username`,{username});
  }

  signin(body:SigninRequest)
  {
    return this.http.post<SigninResponse>(`${this.urlPrefix}signin`, body).pipe(tap(({username})=>
    {
      this.signedIn$.next(true);
      this.username = username;
    }));
  }

  signup(body:SignupRequestBody)
  {
    return this.http.post<SignupResponse>(`${this.urlPrefix}signup`, body).pipe(tap(({username})=>
    {
      this.signedIn$.next(true);
      this.username = username;
    }));
  }

  checkAuth()
  {
    return this.http.get<CheckAuthResponse>(`${this.urlPrefix}signedin`).pipe(tap(({authenticated, username}) =>
    {      
      this.signedIn$.next(authenticated);
      this.username = username ? username : '';
    }));
  }

  signout()
  {
    return this.http.post(`${this.urlPrefix}signout`, {}).pipe(tap(()=>
    {
      this.signedIn$.next(false);
    }));
  }
}

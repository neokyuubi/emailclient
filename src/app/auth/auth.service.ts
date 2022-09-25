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

  urlPrefix:string = "https://api.angular-email.com/auth/";
  signedIn$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) {
    console.log(this.http);
  }

  usernameAvailable(username:string)
  {   
    return this.http.post<UsernameResult>(`${this.urlPrefix}username`,{username});
  }

  signin(body:SigninRequest)
  {
    return this.http.post<SigninResponse>(`${this.urlPrefix}signin`, body).pipe(tap(()=>{
      this.signedIn$.next(true)
    }));
  }

  signup(body:SignupRequestBody)
  {
    return this.http.post<SignupResponse>(`${this.urlPrefix}signup`, body).pipe(tap((result)=>
    {
      this.signedIn$.next(true);
    }));
  }

  checkAuth()
  {
    return this.http.get<CheckAuthResponse>(`${this.urlPrefix}signedin`).pipe(tap(({authenticated}) =>
    {      
      this.signedIn$.next(authenticated);
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

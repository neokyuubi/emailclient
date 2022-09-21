import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsernameResult } from './username-result.boolean';
import { SignupRequestBody } from './signup/signup-request-body';
import { SignupResponse } from './signup/signup-response';
import { BehaviorSubject, tap } from 'rxjs';
import { CheckAuthResponse } from './CheckAuthResponse';

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

  signin()
  {
    
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
    return this.http.get<CheckAuthResponse>(`${this.urlPrefix}signedin`).pipe(tap(({autenticated})=>
    {
      this.signedIn$.next(autenticated);
    }));
  }
}

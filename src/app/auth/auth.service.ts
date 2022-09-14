import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsernameResult } from './username-result.boolean';
import { SignupRequestBody } from './signup/signup-request-body';
import { SignupResponse } from './signup/signup-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlPrefix:string = "https://api.angular-email/auth/";

  constructor(private http:HttpClient) { }

  usernameAvailable(username:string)
  {
    console.log(`${this.urlPrefix}username`);
    
    return this.http.post<UsernameResult>(`${this.urlPrefix}username`,
    {
        username
    })
  }

  signup(body:SignupRequestBody)
  {
    return this.http.post<SignupResponse>(`${this.urlPrefix}signup`, body)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsernameResult } from './username-result.boolean';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  usernameAvailable(username:string)
  {
    return this.http.post<UsernameResult>('https://api.angular-email.com/auth/username',
    {
        username
    })
  }


}

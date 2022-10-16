import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface EmailSummary
{
  id:string,
  subject:string,
  from:string
}

export interface Email
{
  id:string,
  subject:string,
  text:string
  to:string
  from:string,
  html:string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  
  private urlPrefix:string = "https://api.angular-email.com/emails/";

  getEmails()
  {
    return this.http.get<Email[]>(`${this.urlPrefix}`);
  }

  getEmail(id:string)
  {
    return this.http.get<Email>(`${this.urlPrefix}${id}`);
  }

  sendEmail(email:Email)
  {
    return this.http.post<any>(`${this.urlPrefix}`, email);
  }
}

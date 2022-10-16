import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { EmailService, Email } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit 
{

  email!:Email;

  constructor(private activatedRoute:ActivatedRoute, private emailService:EmailService ) { }

  ngOnInit(): void
  {    
    this.activatedRoute.data.subscribe(({email})=>
    {
      this.email = email;
    });
  }



}

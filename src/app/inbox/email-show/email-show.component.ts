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

  email:Partial<Email> = {};

  constructor(private activatedRoute:ActivatedRoute, private emailService:EmailService) { }

  ngOnInit(): void
  {
    this.activatedRoute.params.pipe(
      switchMap(({id})=>
      {
        return this.emailService.getEmail(id);
      })
    ).subscribe((email)=>
    {
      this.email = email;
    })
  }

}

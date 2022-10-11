import { Component, OnInit } from '@angular/core';
import { Email } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {

  showModal:boolean = false;
  email: Email;

  constructor() 
  {
    this.email = {
      id: '',
      subject: '',
      text: '',
      to: '',
      from: 'test11@angular-email.com',
      html: ''
    };
  }

  ngOnInit(): void {
  }

}

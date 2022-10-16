import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email, EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {

  showModal:boolean = false;
  email: Email;

  constructor(private authService:AuthService, private emailService:EmailService) 
  {
    this.email = {
      id: '',
      subject: '',
      text: '',
      to: '',
      from: `${this.authService.username}@angular-email.com`,
      html: ''
    };
  }

  externalSubmit(email:Email)
  {
    // console.log("email emited to create", email);
    this.emailService.sendEmail(email).subscribe((data)=>
    {
      console.log("sent", data);
      this.showModal = false;
    });
  }

  ngOnInit(): void {
  }

}

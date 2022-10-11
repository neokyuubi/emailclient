import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { inputTypes } from 'src/app/shared/input/inputTypes';
import { Email } from '../email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  @Input() email!:Email;
  form!:FormGroup;
  inputTypes = inputTypes;
  
  constructor() { }

  ngOnInit(): void 
  {
    const {subject, from, to, text, html} = this.email;
    this.form = new FormGroup(
    {
      to: new FormControl(to),
      from: new FormControl(from),
      subject: new FormControl(subject),
      text: new FormControl(text),
      html: new FormControl(html)
    })
  }

  getControl(inputName:string)
  {
    return this.form.controls[inputName] as FormControl;
  }

}

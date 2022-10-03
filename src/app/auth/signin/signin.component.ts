import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { inputTypes } from 'src/app/shared/input/inputTypes';
import { AuthService } from '../auth.service';
import { SigninRequest } from './signin-request';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  inputTypes = inputTypes;

  authForm:FormGroup = new FormGroup(
    {
      username: new FormControl("",[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
      ]),
      password:new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    }
  )

  constructor(private authService:AuthService, private router:Router) {}

  getControl(input:string)
  {
    return this.authForm.controls[input] as FormControl;
  }

  onSubmit()
  {
    if (this.authForm.invalid)
    {
      return;
    }
    const body = this.authForm.value as SigninRequest;
    this.authService.signin(body).subscribe(
      {
        next:(value) =>
        {
          // this.router.navigate(['/inbox']);
          this.router.navigateByUrl('/inbox')
          console.log("value", value);
          // console.log("this.authService.signedIn$.getValue() on next", this.authService.signedIn$.getValue());
        },
        error:(err) =>
        {
          console.log("err", err);
          this.authForm.setErrors({signInError:true})
          // console.log("this.authService.signedIn$.getValue() on error", this.authService.signedIn$.getValue());
        }
      }
    )
  }

  ngOnInit(): void {

  }

}

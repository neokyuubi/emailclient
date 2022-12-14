import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { inputTypes } from 'src/app/shared/input/inputTypes';
import { AuthService } from '../auth.service';
import { MathPassword } from '../validators/math-password';
import { UniqueUsername } from '../validators/unique-username';
import { SignupRequestBody } from './signup-request-body';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
  username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [
      this.uniqueUsername.validate.bind(this.uniqueUsername) // if we dont want to make validate as an arrow function
    ]),
    password:new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  },
  { validators: [this.matchPassword.validate]});

  inputTypes = inputTypes;

  constructor(private matchPassword: MathPassword, private uniqueUsername:UniqueUsername, private authService:AuthService, private router:Router) {
  }

  ngOnInit(): void {
  }

  getControl(name:string)
  {
    return this.authForm.controls[name] as FormControl;
  }

  onSubmit()
  {
    if (this.authForm.invalid)
    {
      return;
    }

    const body = this.authForm.value as SignupRequestBody;
    this.authService.signup(body)
    .subscribe({
      next:(value) => {
        // this.router.navigate(['/inbox']);
        this.router.navigateByUrl('/inbox')
      },
      error:(err) => {
        console.log(err);
        
        if (!err.status)
        {
          this.authForm.setErrors({noConnection:true});
        }
        else
        {
          this.authForm.setErrors({unknownError:true});
        }
      }
    })
  }

}

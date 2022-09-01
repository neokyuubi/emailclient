import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MathPassword } from '../validators/math-password';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)]),
    password:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  }, { validators: [this.matchPassword.validate]});

  constructor(private matchPassword: MathPassword) {

  }

  ngOnInit(): void {
  }

}

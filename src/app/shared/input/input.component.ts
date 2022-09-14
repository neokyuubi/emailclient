import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import {inputTypes} from './inputTypes';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() control:FormControl = new FormControl("");
  @Input() label:string = '';
  @Input() inputType:inputTypes = inputTypes.text;

  ngOnInit(): void {
    console.log("this.inputType", this.inputType);
    
  }

}

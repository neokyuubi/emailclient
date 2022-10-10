import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports:
  [
    InputComponent,
    HeaderComponent,
    ModalComponent
  ]
})
export class SharedModule { }

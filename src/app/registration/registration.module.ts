import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class RegistrationModule { }

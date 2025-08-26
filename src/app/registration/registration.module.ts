import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationRoutingModule } from './registration-routing.module';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationRoutingModule,
    ReactiveFormsModule
]
})
export class RegistrationModule { }

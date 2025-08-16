import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component'; // Correct path
import { SignUpRoutingModule } from './sign-up-routing.module';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [SignUpComponent], // ONLY HERE
  imports: [CommonModule, SignUpRoutingModule,CardModule,ReactiveFormsModule,SharedModule],
})
export class SignUpModule {}
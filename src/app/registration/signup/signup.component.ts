import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!:FormGroup
  constructor(private fb:FormBuilder){}
  ngOnInit(): void{
    this.signupForm=this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator:this.PasswordMatchValidator
    })
  }
  PasswordMatchValidator(form:FormGroup){
    const password=form.get('password')?.value
    const confirmPassword=form.get('confirmPassword')?.value
    return password===confirmPassword ? null : {
      passwordMismatch:true
    }
  }
  
 onSubmit(){
  if(this.signupForm.valid){
    console.log('submitted',this.signupForm.value)
  }
  else {
      this.signupForm.markAllAsTouched();
    }
 }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  loginForm !:FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    //this.loginForm=new FormGroup({'username' : new FormControl('' , [Validators.required , Validators.minLength(3)]),


    })

  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log('✅ Login Successful:', this.loginForm.value);
    alert('Login Successful!');
  }
}

  // onSubmit(form: any) {
  //   console.log('Form Submitted:', form.value);
  



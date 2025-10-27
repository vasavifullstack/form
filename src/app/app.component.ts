import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user={
    username:'',
    email:'',
    password:'',
    usernum:''
  };
  onSubmit(form: any) {
    console.log('Form Submitted:', form.value);
  }

}

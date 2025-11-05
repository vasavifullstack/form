import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
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

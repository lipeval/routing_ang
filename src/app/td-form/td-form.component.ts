import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  // @ViewChild('f') signUpForm: NgForm;
  formValue;
  subscriptions = ['Advanced', 'Basic', 'Pro']

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f){

    this.formValue = {
      email: f.value.email,
      subscription: f.value.subscription,
      password: f.value.password
    }
    console.log(f.value)
  }

}

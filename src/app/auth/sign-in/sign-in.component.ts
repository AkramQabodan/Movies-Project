import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private regForm: FormBuilder) {}
  RegisterForm = this.regForm.group({});
  submitForm() {
    console.log(this.RegisterForm.value);
  }

  ngOnInit(): void {}
}

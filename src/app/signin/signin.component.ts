import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signingForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submitted');
    console.log(this.signingForm);
  }
}

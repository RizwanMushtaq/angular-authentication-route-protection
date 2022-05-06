import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signingForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submitted');
    this.signupService.signup();
  }
}

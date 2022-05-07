import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SignupService } from './signup.service';
import { signupResponse } from './signUpTypes';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.signupService.signup(this.signupForm.value).subscribe({
      next: (response: signupResponse) => {
        console.log(response);
        alert(response.email + 'is signed up');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

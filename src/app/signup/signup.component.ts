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
  isLoading = false;
  isSignupSuccessful = false;
  errorMessage: string;

  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    this.signupService.signup(this.signupForm.value).subscribe({
      next: (response: signupResponse) => {
        console.log(response);
        this.isLoading = false;
        this.isSignupSuccessful = true;
      },
      error: (errorMessage) => {
        console.log(errorMessage);
        this.errorMessage = errorMessage;
        this.isLoading = false;
      },
    });
  }
}

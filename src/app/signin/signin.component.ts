import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  isLoading = false;
  isSigninSuccessful = false;
  errorMessage: string;

  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private signinService: SigninService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submitted');
    this.isLoading = true;
    this.signinService.signin(this.signinForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
        this.isSigninSuccessful = true;
      },
      error: (errorMessage) => {
        console.log(errorMessage);
        this.isLoading = false;
        this.errorMessage = errorMessage;
      },
    });
  }
}

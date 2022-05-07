import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private signinService: SigninService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submitted');
    this.signinService.signin(this.signinForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

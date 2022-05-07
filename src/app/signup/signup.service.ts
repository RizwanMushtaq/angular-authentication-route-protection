import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIKEY } from '../apiKey';
import { signupResponse } from './signUpTypes';
import { catchError } from 'rxjs';

export interface signupData {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) {}

  public signup(signupData: signupData) {
    return this.http
      .post<signupResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`,
        {
          email: signupData.email,
          password: signupData.password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes: HttpErrorResponse) => {
          let errorMessage = 'An unknown error occurred';
          if (!errorRes.error || !errorRes.error.error) {
            throw new Error(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'this email exits  already';
          }
          throw new Error(errorMessage);
        })
      );
  }
}

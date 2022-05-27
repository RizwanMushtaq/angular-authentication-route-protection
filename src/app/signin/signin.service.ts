import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { APIKEY } from '../apiKey';
import { catchError } from 'rxjs';

export interface signinData {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class SigninService {
  constructor(private http: HttpClient) {}

  public signin(signinData: signinData) {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`,
        {
          email: signinData.email,
          password: signinData.password,
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
            case 'INVALID_PASSWORD':
              errorMessage = 'your password is incorrect';
              break;
            case 'EMAIL_NOT_FOUND':
              errorMessage = 'this email is not found';
              break;
          }
          throw new Error(errorRes.error.error.message);
        })
      );
  }
}

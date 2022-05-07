import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { APIKEY } from '../apiKey';
import { signupResponse } from './signUpTypes';

export interface signupData {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) {}

  public signup(signupData: signupData) {
    return this.http.post<signupResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`,
      {
        email: signupData.email,
        password: signupData.password,
        returnSecureToken: true,
      }
    );
  }
}

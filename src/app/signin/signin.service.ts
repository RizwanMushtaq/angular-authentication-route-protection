import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APIKEY } from '../apiKey';

export interface signinData {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class SigninService {
  constructor(private http: HttpClient) {}

  public signin(signinData: signinData) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`,
      {
        email: signinData.email,
        password: signinData.password,
        returnSecureToken: true,
      }
    );
  }
}

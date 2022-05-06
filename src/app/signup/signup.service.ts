import { Injectable } from '@angular/core';

import { FirebaseService } from '../firebase.service';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private firebaseService: FirebaseService) {}

  signup() {
    const app = this.firebaseService.getApp();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, 'rizwan@gmail.de', '1234567')
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

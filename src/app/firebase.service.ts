// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
    apiKey: 'AIzaSyACtjDNChtalyzGO4QsBBaPBLyw_mI9QqA',
    authDomain: 'angular-makinghttprequests.firebaseapp.com',
    databaseURL:
      'https://angular-makinghttprequests-default-rtdb.firebaseio.com',
    projectId: 'angular-makinghttprequests',
    storageBucket: 'angular-makinghttprequests.appspot.com',
    messagingSenderId: '360568812798',
    appId: '1:360568812798:web:b76419231cd4435f4a61af',
    measurementId: 'G-QXT1GMR1S1',
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

  public getApp() {
    return this.app;
  }
}

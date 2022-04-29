import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  title: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    this.title = new Observable((observer) => {
      let titleString = 'Welcome Angular!';
      let value = 1;

      let interval = setInterval(() => {
        let modifiedString = titleString.slice(0, value);
        observer.next(modifiedString);

        if (value >= titleString.length) {
          value = 1;
        } else {
          value++;
        }
      }, 300);

      return () => clearInterval(interval);
    });
  }
}

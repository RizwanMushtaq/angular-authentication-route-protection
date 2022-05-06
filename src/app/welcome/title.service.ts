import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  public getString() {
    return new Observable((observer) => {
      let titleString = 'Welcome Angular!';
      let value = 1;

      setInterval(() => {
        let modifiedString: string = titleString.slice(0, value);
        observer.next(modifiedString);

        if (value >= titleString.length) {
          value = 1;
        } else {
          value++;
        }
      }, 300);
    });
  }
}

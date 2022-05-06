import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { TitleService } from './title.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  title: string;
  titleSubscription: Subscription;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    const observer: Observer<any> = {
      next: (data: string) => (this.title = data),
      error: (error: Error) => console.error('Observer got an error: ' + error),
      complete: () => console.log('Observer got a complete notification'),
    };

    const stringObservable = this.titleService.getString();

    this.titleSubscription = stringObservable.subscribe(observer);
  }

  ngOnDestroy() {
    this.titleSubscription.unsubscribe();
  }
}

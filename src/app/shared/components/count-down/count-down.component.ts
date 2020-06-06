import { Component, OnInit, Input } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { Time } from './Types';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  @Input() from: Date;
  @Input() interval: number = 1000;
  countdown$: Observable<Time>;

  constructor() {}

  ngOnInit(): void {
    this.countdown$ = interval(this.interval).pipe(
      map(() => (this.from.getTime() - new Date().getTime()) / 1000),
      takeWhile((seconds) => seconds >= 0),
      map((seconds) => new Time(seconds))
    );
  }
}

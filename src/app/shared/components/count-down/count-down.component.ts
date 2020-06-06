import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { Time } from './Types';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnChanges {
  @Input() from: Date | string;
  @Input() interval: number = 1000;
  countdown$: Observable<Time>;

  constructor() {}

  ngOnChanges(): void {
    if (typeof this.from === 'string')
      this.countdown$ = this.initCountdown(new Date(this.from));
    else this.initCountdown(this.from);
  }

  private initCountdown(from: Date): Observable<Time> {
    return interval(this.interval).pipe(
      map(() => (from.getTime() - new Date().getTime()) / 1000),
      takeWhile((seconds) => seconds >= 0),
      map((seconds) => new Time(seconds))
    );
  }
}

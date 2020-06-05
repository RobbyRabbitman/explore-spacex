import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, tap, share } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  medium$: Observable<Boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.medium$ = this.breakpointObserver.observe('(max-width: 1079px)').pipe(
      map((state) => state.matches),
      share()
    );
  }
}

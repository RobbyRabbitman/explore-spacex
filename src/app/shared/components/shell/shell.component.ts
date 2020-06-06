import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { HOME_BASE, LAUNCHES_BASE } from '../../routes/constants';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  medium$: Observable<Boolean>;
  homeBase: string = HOME_BASE;
  launchesBase: string = LAUNCHES_BASE;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public app: AppService
  ) {}

  ngOnInit(): void {
    this.medium$ = this.breakpointObserver.observe('(max-width: 1079px)').pipe(
      map((state) => state.matches),
      share()
    );
  }
}

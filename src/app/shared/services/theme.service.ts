import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export enum Theme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
}

@Injectable()
export class ThemeService {
  private readonly theme$: BehaviorSubject<Theme>;
  private readonly KEY: string = 'theme';

  //TODO key is null... why..
  constructor() {
    this.theme$ = new BehaviorSubject<Theme>(
      (localStorage.getItem('theme') as Theme) || Theme.LIGHT
    );
    this.theme$.pipe(tap(console.debug)).subscribe(this.apply);
  }

  get theme(): Theme {
    return this.theme$.value;
  }

  set theme(theme: Theme) {
    this.theme$.next(theme);
  }

  private apply(theme: Theme) {
    // TODO document.body.classList.remove(this.theme);
    document.body.classList.remove(...Object.values<Theme>(Theme));
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
}

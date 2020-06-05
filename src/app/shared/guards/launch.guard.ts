import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LaunchesService } from '../services/launches.service';
import { map, tap } from 'rxjs/operators';
import {
  HOME_PAGE,
  LAUNCH_DETAIL_PARAM,
  LAUNCHES_BASE,
} from '../routes/constants';

@Injectable()
export class LaunchGuard implements CanActivate {
  constructor(
    private launchesService: LaunchesService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.launchesService
      .getLaunch(Number(next.paramMap.get(LAUNCH_DETAIL_PARAM)))
      .pipe(
        map((launch) => !!launch),
        tap((exists) => {
          if (!exists) {
            this.router.navigateByUrl(LAUNCHES_BASE);
          }
        })
      );
  }
}

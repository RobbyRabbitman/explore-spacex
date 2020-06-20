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
import { RoutingService } from '../routes/routing.service';
import { LAUNCH_DETAIL_PARAM } from '../routes/constants';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LaunchGuard implements CanActivate {
  constructor(
    private launches: LaunchesService,
    private router: Router,
    private routing: RoutingService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const param = next.params[LAUNCH_DETAIL_PARAM];
    return this.launches.getLaunch(param).pipe(
      map((launch) => !!launch),
      tap((canActivate) => {
        if (!canActivate) {
          console.info(`launch id "${param}" not found`);
          this.router.navigateByUrl(this.routing.LAUNCHES_PAGE);
        }
      })
    );
  }
}

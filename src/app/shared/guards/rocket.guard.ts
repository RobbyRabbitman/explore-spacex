import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RocketService } from '../services/rocket.service';
import { map, tap } from 'rxjs/operators';
import { ROCKETS_DETAIL_PARAM } from '../routes/constants';
import { RoutingService } from '../routes/routing.service';

@Injectable()
export class RocketGuard implements CanActivate {
  constructor(
    private rockets: RocketService,
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
    const param = next.params[ROCKETS_DETAIL_PARAM];
    return this.rockets.getRocket(param).pipe(
      map((rocket) => !!rocket),
      tap((canActivate) => {
        if (!canActivate) {
          console.info(`rocket id "${param}" not found`);
          this.router.navigateByUrl(this.routing.ROCKETS_PAGE);
        }
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LaunchesService } from '../launches.service';
import { map } from 'rxjs/operators';

@Injectable()
export class LaunchGuard implements CanActivate {
  constructor(private launchesService: LaunchesService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.launchesService.launches$.pipe(map((launches) => !!launches));
  }
}

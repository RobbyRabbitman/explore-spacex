import { Injectable } from '@angular/core';
import {
  SHELL_BASE,
  ROCKETS_BASE,
  ROCKETS_PAGE,
  LAUNCHES_BASE,
  LAUNCHES_PAGE,
  INFO_BASE,
  INFO_PAGE,
} from './constants';

@Injectable()
export class RoutingService {
  public readonly ROCKET_DETAIL_PAGE = (id: string): string =>
    `/${SHELL_BASE}/${ROCKETS_BASE}/${ROCKETS_PAGE}/${id}`;

  public readonly LAUNCH_DETAIL_PAGE = (id: number): string =>
    `/${SHELL_BASE}/${LAUNCHES_BASE}/${LAUNCHES_PAGE}/${id}`;

  public readonly INFO_PAGE = `/${SHELL_BASE}/${INFO_BASE}/${INFO_PAGE}`;

  constructor() {}
}

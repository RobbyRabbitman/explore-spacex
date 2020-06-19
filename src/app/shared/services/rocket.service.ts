import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SPACEX_BASE_URL } from './tokens/spacex-base-url.token';
import { BehaviorSubject, Observable, empty } from 'rxjs';
import { Rocket } from '../model/rocket';
import {
  filter,
  take,
  switchMap,
  map,
  catchError,
  share,
} from 'rxjs/operators';
import { isNonNull } from '../utils/isNonNull';

@Injectable()
export class RocketService {
  private readonly ROCKETS: string = '/rockets';
  private readonly ROCKET: string = '/rocket';
  private readonly _rockets$: BehaviorSubject<Rocket[]> = new BehaviorSubject<
    Rocket[]
  >(null);

  constructor(
    private http: HttpClient,
    @Inject(SPACEX_BASE_URL) private BASE_URL: string
  ) {
    this.fetchRockets().subscribe((rockets) => this._rockets$.next(rockets));
  }

  get rockets$() {
    return this._rockets$.asObservable().pipe(filter(isNonNull), take(1));
  }

  public getRocket(id: string, offset: number = 0): Observable<Rocket> {
    if (this._rockets$.value == null && offset === 0)
      return this.fetchRocket(id);
    else
      return this.rockets$.pipe(
        map(
          (rockets) =>
            rockets[rockets.findIndex((rocket) => rocket.id === id) - offset]
        )
      );
  }

  private fetchRocket(id: string): Observable<Rocket> {
    return this.http.get<Rocket>(`${this.BASE_URL}${this.ROCKET}/${id}`);
  }

  private fetchRockets() {
    return this.http.get<Rocket[]>(this.BASE_URL.concat(this.ROCKETS));
  }
}

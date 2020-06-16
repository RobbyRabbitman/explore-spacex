import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SPACEX_BASE_URL } from './tokens/spacex-base-url.token';
import { BehaviorSubject, Observable, empty } from 'rxjs';
import { Rocket } from '../model/rocket';
import { filter, take, switchMap, map, catchError } from 'rxjs/operators';
import { isNonNull } from '../utils/isNonNull';

@Injectable()
export class RocketService {
  private readonly RESSOURCE: string = '/rockets';
  private readonly _rockets$: BehaviorSubject<Rocket[]> = new BehaviorSubject<
    Rocket[]
  >(null);

  constructor(
    private http: HttpClient,
    @Inject(SPACEX_BASE_URL) private BASE_URL: string
  ) {}

  get rocket$() {
    if (this._rockets$.value == null) this.fetch();
    return this._rockets$.asObservable().pipe(filter(isNonNull));
  }

  public getRocket(id: string, offset: number = 0): Observable<Rocket> {
    return this.rocket$.pipe(
      take(1),
      map(
        (rockets) =>
          rockets[rockets.findIndex((rocket) => rocket.id === id) - offset]
      ),
      catchError((err) => empty())
    );
  }

  private fetch() {
    this.http
      .get<Rocket[]>(this.BASE_URL.concat(this.RESSOURCE))
      .subscribe((rockets) => this._rockets$.next(rockets));
  }
}

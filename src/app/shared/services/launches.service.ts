import { Injectable, Inject } from '@angular/core';
import { Launch } from '../model/launch';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, empty } from 'rxjs';
import { map, filter, catchError, take } from 'rxjs/operators';
import { isNonNull } from '../utils/isNonNull';
import { SPACEX_BASE_URL } from './tokens/spacex-base-url.token';

@Injectable()
export class LaunchesService {
  private readonly LAUNCHES: string = '/launches';
  private readonly LAUNCH: string = '/launch';
  private readonly LAUNCH_LATEST: string = '/launch-latest';
  private readonly _launches$: BehaviorSubject<Launch[]> = new BehaviorSubject<
    Launch[]
  >(null);

  constructor(
    private http: HttpClient,
    @Inject(SPACEX_BASE_URL) private BASE_URL: string
  ) {}

  get launches$(): Observable<Launch[]> {
    if (this._launches$.value == null)
      this.fetchLaunches().subscribe((launches) =>
        this._launches$.next(launches)
      );
    return this._launches$.asObservable().pipe(
      filter(isNonNull),
      map((launches) =>
        launches.sort((a, b) =>
          new Date(a.launch_date_utc).getTime() <
          new Date(b.launch_date_utc).getTime()
            ? 1
            : -1
        )
      ),
      take(1)
    );
  }

  public getLaunch(id: number, offset: number = 0): Observable<Launch> {
    if (this._launches$.value === null && offset === 0)
      return this.fetchLaunch(id);
    else
      return this.launches$.pipe(
        map(
          (launches) =>
            launches[launches.findIndex((launch) => launch.id == id) - offset]
        )
      );
  }

  public getLatestLaunch(): Observable<Launch> {
    if (this._launches$.value == null)
      return this.http.get<Launch>(`${this.BASE_URL}${this.LAUNCH_LATEST}`);
    else
      return this.launches$.pipe(
        map<Launch[], Launch>(
          (launches) =>
            launches.filter(
              (launch) =>
                new Date(launch.launch_date_utc).getTime() <= Date.now()
            )[0] // because sorted
        )
      );
  }

  private fetchLaunch(id: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.BASE_URL}${this.LAUNCH}/${id}`);
  }

  private fetchLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.BASE_URL}${this.LAUNCHES}`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Launch } from '../model/launch';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, empty } from 'rxjs';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { isNonNull } from '../utils/isNonNull';

@Injectable()
export class LaunchesService {
  private readonly RESSOURCE: string = 'https://api.spacex.land/rest/launches';
  private readonly _launches$: BehaviorSubject<Launch[]> = new BehaviorSubject<
    Launch[]
  >(null);

  constructor(private http: HttpClient) {}

  private fetch(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.RESSOURCE).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  get launches$(): Observable<Launch[]> {
    if (this._launches$.value == null)
      this.fetch().subscribe((launches) => this._launches$.next(launches));
    return this._launches$.asObservable().pipe(filter(isNonNull));
  }

  public getLaunch(id: number, offset: number = 0): Observable<Launch> {
    return this.sortByLaunchDate(this.launches$).pipe(
      map(
        (launches) =>
          launches[launches.findIndex((launch) => launch.id == id) - offset]
      ),
      catchError((err) => empty())
    );
  }

  public sortByLaunchDate(
    launches$: Observable<Launch[]>
  ): Observable<Launch[]> {
    return launches$.pipe(
      map((launches) =>
        launches.sort((a, b) =>
          new Date(a.launch_date_utc).getTime() <
          new Date(b.launch_date_utc).getTime()
            ? 1
            : -1
        )
      )
    );
  }
}

import { Injectable } from '@angular/core';
import { Launch } from '../model/launch';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { isNonNull } from '../utils/isNonNull';

@Injectable()
export class LaunchesService {
  private readonly RESSOURCE: string = 'https://api.spacex.land/rest/launches';
  private readonly _launches$: BehaviorSubject<Launch[]> = new BehaviorSubject<
    Launch[]
  >(null);

  constructor(private http: HttpClient) {
    this.fetch().subscribe((launches) => this._launches$.next(launches));
  }

  private fetch(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.RESSOURCE);
  }

  get launches$(): Observable<Launch[]> {
    return this._launches$.asObservable();
  }

  public sortByLaunchDate(
    launches$: Observable<Launch[]>
  ): Observable<Launch[]> {
    return launches$.pipe(
      filter(isNonNull),
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

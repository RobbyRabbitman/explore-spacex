import { Injectable } from '@angular/core';
import { Launch } from '../model/launch';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

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
}

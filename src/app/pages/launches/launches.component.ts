import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'src/app/shared/services/launches.service';
import { Observable } from 'rxjs';
import { Launch } from 'src/app/shared/model/launch';
import { map } from 'rxjs/operators';

interface LaunchesPerAnno {
  launches: Launch[];
  year: number;
}

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {
  launches$: Observable<LaunchesPerAnno[]>;

  constructor(private launchesService: LaunchesService) {}

  ngOnInit(): void {
    this.launches$ = this.launchesService.launches$.pipe(
      map((launches) => {
        let latest = Number(
          launches.reduce((a, b) =>
            Number(a.launch_year) < Number(b.launch_year) ? b : a
          ).launch_year
        );
        let oldest = Number(
          launches.reduce((a, b) =>
            Number(a.launch_year) > Number(b.launch_year) ? b : a
          ).launch_year
        );
        let out: LaunchesPerAnno[] = [];
        for (let currentYear = latest; currentYear >= oldest; currentYear--) {
          out.push({
            launches: launches
              .filter(
                (launches) => Number(launches.launch_year) === currentYear
              )
              .sort((a, b) =>
                new Date(a.launch_date_utc).getTime() <
                new Date(b.launch_date_utc).getTime()
                  ? 1
                  : -1
              ),
            year: currentYear,
          });
        }
        return out;
      })
    );
  }
}

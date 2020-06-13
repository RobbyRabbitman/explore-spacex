import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { LaunchesService } from 'src/app/shared/services/launches.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Launch } from 'src/app/shared/model/launch';
import { map, share, take, tap, filter, scan, last } from 'rxjs/operators';
import { isNonNull } from 'src/app/shared/utils/isNonNull';
import { LaunchesOverviewComponent } from 'src/app/shared/components/launches-overview/launches-overview.component';
import { element } from 'protractor';
import { threadId } from 'worker_threads';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {
  launches$: Observable<Map<number, Launch[]>>;
  private years: number[];

  @ViewChildren('launch', { read: ElementRef }) set launches(
    components: QueryList<ElementRef>
  ) {
    if (components.length === 0) return;
    // toc elementRefs

    const toc = this.years.map((year) =>
      document.querySelector(`#toc_year_${year}`)
    );
    // create Observer
    const observer = new IntersectionObserver((entries, observer) => {
      let years: number[] = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => Number(entry.target.id.replace('year_', '')));

      if (years.length > 0) {
        toc.forEach((element) => element.classList.remove('toc-active'));
        let id: string = `toc_year_${years.reduce((a, b) => (a > b ? a : b))}`;
        toc.find((element) => element.id === id).classList.add('toc-active');
      }
    });
    // observe elements
    components.forEach((element) => observer.observe(element.nativeElement));
  }

  constructor(private launchesService: LaunchesService) {}

  ngOnInit(): void {
    //
    this.launches$ = this.launchesService.launches$.pipe(
      take(1),
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
        let out: Map<number, Launch[]> = new Map();
        for (let currentYear = latest; currentYear >= oldest; currentYear--) {
          let current = launches
            .filter((launches) => Number(launches.launch_year) === currentYear)
            .sort((a, b) =>
              new Date(a.launch_date_utc).getTime() <
              new Date(b.launch_date_utc).getTime()
                ? 1
                : -1
            );

          if (current.length > 0) out.set(currentYear, current);
        }
        return out;
      }),
      tap((map) => (this.years = [...map.keys()])),
      share()
    );
  }

  originalOrder() {
    return 0;
  }

  scrollTo(year: string) {
    // querySelectorAll not necessary (first id is header)

    document.querySelector(`#year_${year}`).scrollIntoView();
  }
}

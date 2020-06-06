import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { pluck, switchMap, share, take } from 'rxjs/operators';
import { LaunchesService } from '../../services/launches.service';
import { Observable } from 'rxjs';
import { Launch } from '../../model/launch';
import { LAUNCH_DETAIL_PARAM, LAUNCHES_BASE } from '../../routes/constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit {
  launch$: Observable<Launch>;
  launchesPage: string;

  constructor(
    private route: ActivatedRoute,
    private launchesService: LaunchesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.launchesPage = LAUNCHES_BASE;
    this.launch$ = this.route.params.pipe(
      pluck<ParamMap, number>(LAUNCH_DETAIL_PARAM),
      switchMap((id) => this.launchesService.getLaunch(id).pipe(share()))
    );
  }

  navigate(id: number, offset: number) {
    this.launchesService
      .getLaunch(id, offset)
      .pipe(take(1))
      .subscribe((nextlaunch) =>
        this.router.navigate([`../${nextlaunch.id}`], {
          relativeTo: this.route,
        })
      );
  }
}

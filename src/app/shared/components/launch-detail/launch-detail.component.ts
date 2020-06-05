import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { pluck, switchMap, share } from 'rxjs/operators';
import { LaunchesService } from '../../services/launches.service';
import { Observable } from 'rxjs';
import { Launch } from '../../model/launch';
import { LAUNCH_DETAIL_PARAM } from '../../routes/constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit {
  launch$: Observable<Launch>;

  constructor(
    private route: ActivatedRoute,
    private launchesService: LaunchesService,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.launch$ = this.route.params.pipe(
      pluck<ParamMap, number>(LAUNCH_DETAIL_PARAM),
      switchMap((id) => this.launchesService.getLaunch(id).pipe(share()))
    );
  }
}

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
    public launchesService: LaunchesService
  ) {}

  ngOnInit(): void {
    this.launchesPage = LAUNCHES_BASE;
    this.launch$ = this.route.params.pipe(
      pluck<ParamMap, number>(LAUNCH_DETAIL_PARAM),
      switchMap((id) => this.launchesService.getLaunch(id).pipe(share()))
    );
  }
  //"https://youtu.be/y4xBFHjkUvw"
  getIdOfYoutubeVideo(launch: Launch) {
    return launch.links.video_link?.replace('https://youtu.be/', '');
  }
}

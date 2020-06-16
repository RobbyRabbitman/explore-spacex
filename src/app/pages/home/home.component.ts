import { Component, OnInit } from '@angular/core';
import { LAUNCHES_BASE, ROCKETS_BASE } from 'src/app/shared/routes/constants';
import { AssetsService } from 'src/app/shared/services/assets.service';
import { LaunchesService } from 'src/app/shared/services/launches.service';
import { Observable } from 'rxjs';
import { Launch } from 'src/app/shared/model/launch';
import { RocketService } from 'src/app/shared/services/rocket.service';
import { Rocket } from 'src/app/shared/model/rocket';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  launchesPage: string;
  rocketsPage: string;
  latestLaunch$: Observable<Launch>;
  rocket$: Observable<Rocket>;

  constructor(
    public assets: AssetsService,
    public app: AppService,
    private launches: LaunchesService,
    private rockets: RocketService
  ) {}

  ngOnInit(): void {
    this.launchesPage = LAUNCHES_BASE;
    this.rocketsPage = ROCKETS_BASE;
    this.latestLaunch$ = this.launches.getLatestLaunch();
    this.rocket$ = this.rockets.getRocket('falcon9');
  }
}

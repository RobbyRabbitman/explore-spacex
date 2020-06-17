import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RocketService } from '../../services/rocket.service';
import { pluck, map, switchMap, share } from 'rxjs/operators';
import { ROCKETS_DETAIL_PARAM } from '../../routes/constants';
import { Rocket } from '../../model/rocket';
import { Observable } from 'rxjs';
import { AssetsService } from '../../services/assets.service';
import { RoutingService } from '../../routes/routing.service';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.scss'],
})
export class RocketDetailComponent implements OnInit {
  rocket$: Observable<Rocket>;

  constructor(
    private route: ActivatedRoute,
    public rocketService: RocketService,
    public assets: AssetsService,
    public ROUTES: RoutingService
  ) {}

  ngOnInit(): void {
    this.rocket$ = this.route.params.pipe(
      pluck<Rocket, string>(ROCKETS_DETAIL_PARAM),
      switchMap((id) => this.rocketService.getRocket(id))
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Rocket } from '../../model/rocket';
import { RoutingService } from '../../routes/routing.service';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-rocket-overview',
  templateUrl: './rocket-overview.component.html',
  styleUrls: ['./rocket-overview.component.scss'],
})
export class RocketOverviewComponent {
  @Input() rocket: Rocket;

  constructor(
    public readonly ROUTES: RoutingService,
    public assets: AssetsService
  ) {}
}

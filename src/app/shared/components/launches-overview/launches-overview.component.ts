import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Launch } from '../../model/launch';
import { showCountDown } from '../../utils/launches';
import { RoutingService } from '../../routes/routing.service';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-launches-overview',
  templateUrl: './launches-overview.component.html',
  styleUrls: ['./launches-overview.component.scss'],
})
export class LaunchesOverviewComponent implements OnInit {
  @Input() launch: Launch;

  constructor(
    public elementRef: ElementRef,
    public ROUTES: RoutingService,
    public assets: AssetsService
  ) {}
  ngOnInit(): void {}

  showCountdown = showCountDown;
}

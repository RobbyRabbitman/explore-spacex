import { Component, OnInit, Input } from '@angular/core';
import { Rocket } from '../../model/rocket';

@Component({
  selector: 'app-rocket-overview',
  templateUrl: './rocket-overview.component.html',
  styleUrls: ['./rocket-overview.component.scss'],
})
export class RocketOverviewComponent implements OnInit {
  @Input() rocket: Rocket;

  constructor() {}

  ngOnInit(): void {}
}

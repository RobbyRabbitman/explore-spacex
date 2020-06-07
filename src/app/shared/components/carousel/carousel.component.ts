import { Component, Input, OnChanges } from '@angular/core';
import { Config } from './types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() config: Config;

  constructor() {}
}

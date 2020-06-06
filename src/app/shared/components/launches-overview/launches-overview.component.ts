import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../../model/launch';

@Component({
  selector: 'app-launches-overview',
  templateUrl: './launches-overview.component.html',
  styleUrls: ['./launches-overview.component.scss'],
})
export class LaunchesOverviewComponent implements OnInit {
  @Input() launch: Launch;

  constructor() {}

  ngOnInit(): void {}

  stringToDate(string: string) {
    return new Date(string);
  }
}

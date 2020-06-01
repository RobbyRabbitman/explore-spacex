import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'src/app/shared/services/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {
  constructor(private launchesService: LaunchesService) {}

  ngOnInit(): void {
    this.launchesService
      .sortByLaunchDate(this.launchesService.launches$)
      .subscribe((x) => console.log(x));
  }
}

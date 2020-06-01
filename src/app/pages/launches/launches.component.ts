import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'src/app/shared/services/launches.service';
import { Observable } from 'rxjs';
import { Launch } from 'src/app/shared/model/launch';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {
  launches$: Observable<Launch[]>;

  constructor(private launchesService: LaunchesService) {}

  ngOnInit(): void {
    this.launches$ = this.launchesService.sortByLaunchDate(
      this.launchesService.launches$
    );
  }
}

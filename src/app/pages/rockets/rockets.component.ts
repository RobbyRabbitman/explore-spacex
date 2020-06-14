import { Component, OnInit } from '@angular/core';
import { RocketService } from 'src/app/shared/services/rocket.service';
import { Observable } from 'rxjs';
import { Rocket } from 'src/app/shared/model/rocket';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
})
export class RocketsComponent implements OnInit {
  rockets$: Observable<Rocket[]>;

  constructor(private rocketService: RocketService) {}

  ngOnInit(): void {
    this.rockets$ = this.rocketService.rocket$.pipe(share());
  }
}

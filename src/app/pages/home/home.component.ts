import { Component, OnInit } from '@angular/core';
import { LAUNCHES_BASE } from 'src/app/shared/routes/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  launchesPage: string;

  constructor() {}

  ngOnInit(): void {
    this.launchesPage = LAUNCHES_BASE;
  }
}

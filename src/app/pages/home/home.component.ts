import { Component, OnInit } from '@angular/core';
import { LAUNCHES_PAGE } from '../../app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  launchesPage: string;

  constructor() {}

  ngOnInit(): void {
    this.launchesPage = LAUNCHES_PAGE;
  }
}

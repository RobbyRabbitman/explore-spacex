import { Component, OnInit, Inject } from '@angular/core';
import { SPACEX_BASE_URL } from 'src/app/shared/services/tokens/spacex-base-url.token';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  constructor(@Inject(SPACEX_BASE_URL) public readonly REST_API: string) {}
}

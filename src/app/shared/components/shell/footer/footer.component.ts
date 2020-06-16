import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/routes/routing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public routing: RoutingService) {}
}

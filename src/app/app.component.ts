import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { AppService } from './shared/services/app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // invoke creation
  constructor(
    private theme: ThemeService,
    private app: AppService,
    private titleService: Title
  ) {
    this.titleService.setTitle(app.name);
  }
}

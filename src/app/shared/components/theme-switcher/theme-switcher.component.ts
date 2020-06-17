import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  constructor(public service: ThemeService) {}

  toggle() {
    this.service.theme =
      this.service.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  }
}

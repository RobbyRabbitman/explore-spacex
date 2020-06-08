import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  constructor(
    @Inject(DOCUMENT) private DOCUMENT: Document,
    private renderer: Renderer2
  ) {}

  toggle({ checked }: MatSlideToggleChange) {
    this.renderer.setAttribute(
      this.DOCUMENT.body,
      'class',
      checked ? 'dark-theme' : 'light-theme'
    );
  }
}

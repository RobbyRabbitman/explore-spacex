import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  exports: [ThemeSwitcherComponent],
  declarations: [ThemeSwitcherComponent],
  imports: [CommonModule, MaterialModule],
})
export class ThemeSwitcherModule {}

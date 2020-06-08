import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { MaterialModule } from '../../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeSwitcherModule } from '../theme-switcher/theme-switcher.module';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    MaterialModule,
    ThemeSwitcherModule,
  ],
})
export class ShellModule {}

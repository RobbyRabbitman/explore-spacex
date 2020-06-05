import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, ShellRoutingModule, MaterialModule],
})
export class ShellModule {}

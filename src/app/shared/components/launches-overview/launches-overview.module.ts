import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownModule } from '../count-down/count-down.module';
import { LaunchesOverviewComponent } from './launches-overview.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  exports: [LaunchesOverviewComponent],
  declarations: [LaunchesOverviewComponent],
  imports: [CommonModule, CountDownModule, RouterModule, MaterialModule],
})
export class LaunchesOverviewModule {}

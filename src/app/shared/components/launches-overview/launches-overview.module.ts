import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesOverviewComponent } from './launches-overview.component';

@NgModule({
  exports: [LaunchesOverviewComponent],
  declarations: [LaunchesOverviewComponent],
  imports: [CommonModule],
})
export class LaunchesOverviewModule {}

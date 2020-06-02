import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesOverviewComponent } from './launches-overview.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [LaunchesOverviewComponent],
  declarations: [LaunchesOverviewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
})
export class LaunchesOverviewModule {}

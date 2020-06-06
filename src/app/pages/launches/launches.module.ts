import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches.component';
import { LaunchesService } from 'src/app/shared/services/launches.service';
import { LaunchDetailComponent } from 'src/app/shared/components/launch-detail/launch-detail.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LaunchGuard } from 'src/app/shared/guards/launch.guard';
import { LaunchesOverviewModule } from 'src/app/shared/components/launches-overview/launches-overview.module';
import { LaunchDetailModule } from 'src/app/shared/components/launch-detail/launch-detail.module';

@NgModule({
  declarations: [LaunchesComponent],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    MaterialModule,
    LaunchesOverviewModule,
    LaunchDetailModule,
  ],
  providers: [LaunchesService, LaunchGuard],
})
export class LaunchesModule {}

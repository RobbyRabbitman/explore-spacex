import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches.component';
import { LaunchesService } from 'src/app/shared/services/launches.service';
import { LaunchDetailComponent } from 'src/app/shared/components/launch-detail/launch-detail.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LaunchesOverviewComponent } from 'src/app/shared/components/launches-overview/launches-overview.component';
import { LaunchGuard } from 'src/app/shared/services/guards/launch.guard';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchDetailComponent,
    LaunchesOverviewComponent,
  ],
  imports: [CommonModule, LaunchesRoutingModule, MaterialModule],
  providers: [LaunchesService, LaunchGuard],
})
export class LaunchesModule {}

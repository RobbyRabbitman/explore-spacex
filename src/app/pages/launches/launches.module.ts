import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches.component';
import { LaunchesService } from 'src/app/shared/services/launches.service';
import { LaunchesOverviewModule } from 'src/app/shared/components/launches-overview/launches-overview.module';

@NgModule({
  declarations: [LaunchesComponent],
  imports: [CommonModule, LaunchesRoutingModule, LaunchesOverviewModule],
  providers: [LaunchesService],
})
export class LaunchesModule {}

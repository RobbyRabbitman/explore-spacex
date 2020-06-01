import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches.component';
import { LaunchesService } from 'src/app/shared/services/launches.service';

@NgModule({
  declarations: [LaunchesComponent],
  imports: [CommonModule, LaunchesRoutingModule],
  providers: [LaunchesService],
})
export class LaunchesModule {}

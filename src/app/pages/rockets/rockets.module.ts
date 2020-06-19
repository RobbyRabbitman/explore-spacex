import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { RocketsComponent } from './rockets.component';
import { RocketOverviewModule } from 'src/app/shared/components/rocket-overview/rocket-overview.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RocketDetailModule } from 'src/app/shared/components/rocket-detail/rocket-detail.module';
import { RocketService } from 'src/app/shared/services/rocket.service';
import { RocketGuard } from 'src/app/shared/guards/rocket.guard';

@NgModule({
  declarations: [RocketsComponent],
  imports: [
    CommonModule,
    RocketsRoutingModule,
    RocketOverviewModule,
    RocketDetailModule,
    MaterialModule,
  ],
  providers: [RocketGuard],
})
export class RocketsModule {}

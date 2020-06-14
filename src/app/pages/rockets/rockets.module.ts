import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { RocketsComponent } from './rockets.component';
import { RocketOverviewModule } from 'src/app/shared/components/rocket-overview/rocket-overview.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [RocketsComponent],
  imports: [
    CommonModule,
    RocketsRoutingModule,
    RocketOverviewModule,
    MaterialModule,
  ],
})
export class RocketsModule {}

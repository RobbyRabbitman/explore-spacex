import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RocketOverviewModule } from 'src/app/shared/components/rocket-overview/rocket-overview.module';
import { LaunchesOverviewModule } from 'src/app/shared/components/launches-overview/launches-overview.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MaterialModule,
    RocketOverviewModule,
    LaunchesOverviewModule,
  ],
})
export class HomeModule {}

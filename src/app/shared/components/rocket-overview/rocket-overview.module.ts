import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketOverviewComponent } from './rocket-overview.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RocketOverviewComponent],
  exports: [RocketOverviewComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class RocketOverviewModule {}

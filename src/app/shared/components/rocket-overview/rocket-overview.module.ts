import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketOverviewComponent } from './rocket-overview.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [RocketOverviewComponent],
  exports: [RocketOverviewComponent],
  imports: [CommonModule, MaterialModule],
})
export class RocketOverviewModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDetailComponent } from './rocket-detail.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [RocketDetailComponent],
  declarations: [RocketDetailComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class RocketDetailModule {}

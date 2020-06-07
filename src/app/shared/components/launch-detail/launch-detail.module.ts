import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchDetailComponent } from './launch-detail.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { CountDownModule } from '../count-down/count-down.module';
import { CarouselModule } from '../carousel/carousel.module';

@NgModule({
  exports: [LaunchDetailComponent],
  declarations: [LaunchDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CountDownModule,
    CarouselModule,
  ],
})
export class LaunchDetailModule {}

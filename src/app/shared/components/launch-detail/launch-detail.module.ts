import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchDetailComponent } from './launch-detail.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { CountDownModule } from '../count-down/count-down.module';
import { CarouselModule } from '../carousel/carousel.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  exports: [LaunchDetailComponent],
  declarations: [LaunchDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CountDownModule,
    CarouselModule,
    YouTubePlayerModule,
  ],
})
export class LaunchDetailModule {}

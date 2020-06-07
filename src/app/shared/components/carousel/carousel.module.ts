import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  exports: [CarouselComponent],
  declarations: [CarouselComponent],
  imports: [CommonModule, MaterialModule],
})
export class CarouselModule {}

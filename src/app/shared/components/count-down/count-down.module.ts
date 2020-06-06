import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down.component';

@NgModule({
  exports: [CountDownComponent],
  declarations: [CountDownComponent],
  imports: [CommonModule],
})
export class CountDownModule {}

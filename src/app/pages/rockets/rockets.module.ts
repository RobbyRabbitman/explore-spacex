import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { RocketsComponent } from './rockets.component';


@NgModule({
  declarations: [RocketsComponent],
  imports: [
    CommonModule,
    RocketsRoutingModule
  ]
})
export class RocketsModule { }

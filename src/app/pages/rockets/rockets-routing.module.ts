import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketsComponent } from './rockets.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: RocketsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocketsRoutingModule {}

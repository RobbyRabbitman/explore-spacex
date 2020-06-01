import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LaunchesComponent },
      { path: ':id', component: null },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}

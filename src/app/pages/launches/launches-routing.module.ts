import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches.component';
import { LaunchDetailComponent } from 'src/app/shared/components/launch-detail/launch-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LaunchesComponent },
      { path: ':id', component: LaunchDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}

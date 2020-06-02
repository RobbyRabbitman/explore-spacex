import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches.component';
import { LaunchDetailComponent } from 'src/app/shared/components/launch-detail/launch-detail.component';
import { LAUNCH_DETAIL_PARAM } from 'src/app/shared/routes/constants';
import { LaunchGuard } from 'src/app/shared/guards/launch.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LaunchesComponent },
      {
        path: `:${LAUNCH_DETAIL_PARAM}`,
        component: LaunchDetailComponent,
        canActivate: [LaunchGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}

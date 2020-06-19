import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketsComponent } from './rockets.component';
import { ROCKETS_DETAIL_PARAM } from 'src/app/shared/routes/constants';
import { RocketDetailComponent } from 'src/app/shared/components/rocket-detail/rocket-detail.component';
import { RocketGuard } from 'src/app/shared/guards/rocket.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RocketsComponent },
      {
        path: `:${ROCKETS_DETAIL_PARAM}`,
        component: RocketDetailComponent,
        canActivate: [RocketGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocketsRoutingModule {}

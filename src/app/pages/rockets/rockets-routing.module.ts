import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketsComponent } from './rockets.component';
import { ROCKETS_DETAIL_PARAM } from 'src/app/shared/routes/constants';
import { RocketDetailComponent } from 'src/app/shared/components/rocket-detail/rocket-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RocketsComponent },
      { path: `:${ROCKETS_DETAIL_PARAM}`, component: RocketDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocketsRoutingModule {}

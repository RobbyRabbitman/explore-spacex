import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { INFO_PAGE } from 'src/app/shared/routes/constants';
import { InfoComponent } from './info.component';

const routes: Routes = [
  {
    path: INFO_PAGE,
    component: InfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOME_PAGE, LAUNCHES_PAGE } from './shared/routes/constants';

const routes: Routes = [
  {
    path: HOME_PAGE,
    loadChildren: () =>
      import('../app/pages/home/home.module').then(
        (module) => module.HomeModule
      ),
  },
  {
    path: LAUNCHES_PAGE,
    loadChildren: () =>
      import('../app/pages/launches/launches.module').then(
        (module) => module.LaunchesModule
      ),
  },
  {
    path: '**',
    redirectTo: HOME_PAGE,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

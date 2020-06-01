import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'launches',
    loadChildren: () =>
      import('../app/pages/launches/launches.module').then(
        (module) => module.LaunchesModule
      ),
  },
  {
    path: '**',
    redirectTo: 'launches',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

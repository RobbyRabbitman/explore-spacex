import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LAUNCHES_PAGE, SHELL_PAGE } from '../../routes/constants';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: SHELL_PAGE,
    component: ShellComponent,
    children: [
      {
        path: LAUNCHES_PAGE,
        loadChildren: () =>
          import('../../../pages/launches/launches.module').then(
            (module) => module.LaunchesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}

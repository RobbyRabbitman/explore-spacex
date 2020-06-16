import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LAUNCHES_BASE,
  SHELL_PAGE,
  ROCKETS_BASE,
  INFO_BASE,
} from '../../routes/constants';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: SHELL_PAGE,
    component: ShellComponent,
    children: [
      {
        path: LAUNCHES_BASE,
        loadChildren: () =>
          import('../../../pages/launches/launches.module').then(
            (module) => module.LaunchesModule
          ),
      },
      {
        path: ROCKETS_BASE,
        loadChildren: () =>
          import('../../../pages/rockets/rockets.module').then(
            (module) => module.RocketsModule
          ),
      },
      {
        path: INFO_BASE,
        loadChildren: () =>
          import('../../../pages/info/info.module').then(
            (module) => module.InfoModule
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

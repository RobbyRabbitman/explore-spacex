import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SHELL_BASE, HOME_BASE } from './shared/routes/constants';

const routes: Routes = [
  {
    path: HOME_BASE,
    loadChildren: () =>
      import('../app/pages/home/home.module').then(
        (module) => module.HomeModule
      ),
  },
  {
    path: SHELL_BASE,
    loadChildren: () =>
      import('../app/shared/components/shell/shell.module').then(
        (module) => module.ShellModule
      ),
  },
  {
    path: '**',
    redirectTo: HOME_BASE,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

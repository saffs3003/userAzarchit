import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./features/user/component/user-detail/user-detail.component').then(
        (m) => m.UserDetailComponent,
      ),
  },
];

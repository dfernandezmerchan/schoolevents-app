import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pagina1',
    loadComponent: () => import('./paginas/pagina1/pagina1.page').then( m => m.Pagina1Page)
  },
];

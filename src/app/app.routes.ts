import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then(m =>
      m.LoginPage),
  },

  {
    path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./paginas/home/home.page').then(m =>
          m.HomePage),
      },
      {
        path: 'calendario',
        loadComponent: () => import('./paginas/calendario/calendario.page').then( m =>
          m.CalendarioPage)
      },

      {
        path: 'miseventos',
        loadComponent: () => import('./paginas/miseventos/miseventos.page').then( m => m.MiseventosPage)
      },

      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then(m =>
          m.PerfilPage),
      },

      {
        path: 'alertas',
        loadComponent: () => import('./paginas/alertas/alertas.page').then( m => m.AlertasPage)
      },

      {
        path: 'eventodetalle/:id',
        loadComponent: () => import('./paginas/eventodetalle/eventodetalle.page').then( m => m.EventodetallePage)
      },

      {
        path: 'crearevento',
        loadComponent: () => import('./paginas/crearevento/crearevento.page').then( m => m.CreareventoPage)
      },

      {
        path: 'error404',
        loadComponent: () => import('./paginas/error404/error404.page').then( m => m.Error404Page)
      },

      {
        path: 'listaasistentes',
        loadComponent: () => import('./paginas/listaasistentes/listaasistentes.page').then( m => m.ListaasistentesPage)
      },
      {
        path: 'listaespera',
        loadComponent: () => import('./paginas/listaespera/listaespera.page').then( m => m.ListaesperaPage)
      },

    ],
  },








];

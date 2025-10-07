import { Notfound } from './components/notfound/notfound';
import { ContactUs } from './components/contactus/contactus';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { Email } from './components/contactus/nested/email/email';
import { Mobile } from './components/contactus/nested/mobile/mobile';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'home' ,canActivate: [authGuard],},
  {
    path: 'about',
    component: About,
    title: '',
    canActivate: [authGuard],
  },

  {
    path: 'contactus',
    loadComponent: () => import('./components/contactus/contactus').then((m) => m.ContactUs),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'web',
        pathMatch: 'full',
      },
      {
        path: 'email',
        component: Email,
      },
      {
        path: 'mobile',
        component: Mobile,
      },
    ],
  },
  { path: 'login', component: Login, title: 'login' },
  { path: '**', component: Notfound, title: 'notfound' },
];

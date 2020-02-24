import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'home',
    // loadChildren: './modules/home/home.module#HomeModule'
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'poste',
    loadChildren: () => import('./modules/poste/poste.module').then(mod => mod.PosteModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// https://stackblitz.com/angular/aqqyljyojye
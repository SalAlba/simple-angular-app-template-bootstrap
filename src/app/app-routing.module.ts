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
    path: 'postes',
    loadChildren: () => import('./modules/postes/postes.module').then(mod => mod.PostesModule)
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
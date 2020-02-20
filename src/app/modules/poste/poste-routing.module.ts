import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosteComponent } from './components/poste/poste.component';

const routes: Routes = [
    {
        path: 'poste',
        component: PosteComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PosteRoutingModule { }

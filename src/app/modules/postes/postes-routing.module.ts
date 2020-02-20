import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostesComponent } from "./components/postes/postes.component";

const routes: Routes = [
  {
    path: 'postes',
    component: PostesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostesRoutingModule { }

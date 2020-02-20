import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostesRoutingModule } from "./postes-routing.module";

// components ...
import { PostesComponent } from './components/postes/postes.component';
import { PosteComponent } from './components/poste/poste.component';



@NgModule({
  declarations: [PostesComponent, PosteComponent],
  imports: [
    CommonModule,
    PostesRoutingModule
  ]
})
export class PostesModule { }

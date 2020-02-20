import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules ...
import { CoreModule } from "../../core/core.module";
import { PosteRoutingModule } from "./poste-routing.module";

// components ...
import { PosteComponent } from './components/poste/poste.component';




@NgModule({
  declarations: [PosteComponent],
  imports: [
    CommonModule,
    CoreModule,
    PosteRoutingModule
  ],
  exports: [
  ]
})
export class PosteModule { }

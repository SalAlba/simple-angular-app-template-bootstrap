import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules ...
import { CoreModule } from "../../core/core.module";
import { HomeRoutingModule } from "./home-routing.module";

// components ...
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule
  ],
  exports: [
  ]
})
export class HomeModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules ...
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./modules/home/home.module";
import { PosteModule } from "./modules/poste/poste.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";

// components ...
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule, // in anular page ex. no import !!!  https://stackblitz.com/angular/aqqyljyojye
    PosteModule,
    AuthenticationModule,
    AppRoutingModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

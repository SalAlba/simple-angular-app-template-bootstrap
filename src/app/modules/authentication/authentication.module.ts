import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';


// modules ...
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SingUpEmailComponent } from './components/sing-up-email/sing-up-email.component';
import { SingUpFacebookComponent } from './components/sing-up-facebook/sing-up-facebook.component';
import { SingInFacebookComponent } from './components/sing-in-facebook/sing-in-facebook.component';
import { SingInEmailComponent } from './components/sing-in-email/sing-in-email.component';

@NgModule({
  declarations: [SingInComponent, SingUpComponent, SingUpEmailComponent, SingUpFacebookComponent, SingInFacebookComponent, SingInEmailComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }

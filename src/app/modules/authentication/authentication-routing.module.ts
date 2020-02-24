import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { SingInEmailComponent } from "./components/sing-in-email/sing-in-email.component";
import { SingUpEmailComponent } from "./components/sing-up-email/sing-up-email.component";

const routes: Routes = [
  {
      path: 'login',
      component: SingInComponent,
  },
  {
      path: 'login-email',
      component: SingInEmailComponent,
  },
  {
      path: 'register',
      component: SingUpComponent,
  },
  {
      path: 'register-email',
      component: SingUpEmailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

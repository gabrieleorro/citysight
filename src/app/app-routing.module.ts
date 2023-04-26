import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { RegistrationComponent } from './components/account/registration/registration.component';
import { LoginComponent } from './components/account/login/login.component';
import { ProfileComponent } from './components/account/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'account', component: AccountComponent, children: [
    { path: 'registrazione', component: RegistrationComponent},
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: ProfileComponent}
  ]},
  // { path: 'pages', children: [
  //   { path: 'contatti', component: ContactsComponent},
  //   { path: 'tempi-di-consegna-e-costi', component: DeliveryTimeComponent},
  //   { path: 'resi-e-sostituzioni', component: ReturnsReplacementsComponent},
  //   { path: '', pathMatch: 'full', component: NotFoundComponent},
  // ]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

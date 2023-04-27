import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'account', component: UserComponent, children: [
    { path: 'login', component: LoginComponent},
  ]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

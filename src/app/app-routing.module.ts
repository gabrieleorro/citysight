import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CitiesListComponent } from './components/cities/cities-list/cities-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'cities',  component: CitiesComponent, children: [
    { path: '', pathMatch: 'full', component: CitiesListComponent}
  ]},
  { path: 'account', component: UserComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent}
  ]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

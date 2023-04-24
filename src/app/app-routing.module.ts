import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  // { path: 'pages', children: [
  //   { path: 'contatti', component: ContactsComponent},
  //   { path: 'tempi-di-consegna-e-costi', component: DeliveryTimeComponent},
  //   { path: 'resi-e-sostituzioni', component: ReturnsReplacementsComponent},
  //   { path: '', pathMatch: 'full', component: NotFoundComponent},
  // ]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagesComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    NgbModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RatingModule,
    ImageModule,
    MessagesModule,
    PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

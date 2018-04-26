import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {CartComponent} from './cart/cart.component';
import {AgmCoreModule } from '@agm/core';
import {NavBarComponent} from './navbar/navbar.component';
import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { EditAddressComponent } from './user-settings/edit-address/edit-address.component';
import { EditUserInfoComponent } from './user-settings/edit-user-info/edit-user-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LogInComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    NavBarComponent,
    UserSettingsComponent,
    EditAddressComponent,
    EditUserInfoComponent
  ],
  imports: [
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAv_X_na-8I5BKiJd4qhILO2o3hXAAA6aM'}),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
     {
       path: '', component: HomeComponent
     },
     {
      path: 'products', component: ProductsComponent
     },
     {
       path: 'log_in', component: LogInComponent
      },
     {
       path: 'register', component: RegisterComponent
     },
     {
       path: 'about', component: AboutComponent
     },
     {
       path: 'contact', component: ContactComponent
     },
     {
       path: 'cart', component: CartComponent
     },
     {path: 'user_settings', component: UserSettingsComponent}
    ],
    ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }

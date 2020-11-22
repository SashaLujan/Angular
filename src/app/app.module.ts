import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesListComponent } from './list-articles/list-articles.component';
import { FormsModule } from '@angular/forms';
import { AboutBuhoComponent } from './about-buho/about-buho.component';
import { ArticulosBuhoComponent } from './articles-buho/articulos-buho.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    AboutBuhoComponent,
    ArticulosBuhoComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

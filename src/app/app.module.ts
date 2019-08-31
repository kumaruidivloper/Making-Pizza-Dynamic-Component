import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ChoicesComponent } from './choices/choices.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    ChoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [PizzaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

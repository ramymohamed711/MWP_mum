import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { Counter2Component } from './counter2.component';
import { Counter3Component } from './counter3.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Counter2Component,
    Counter3Component,
  ],
  imports: [
    BrowserModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

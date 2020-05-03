import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule ,
    BrowserAnimationsModule
  ],
  declarations: [ 
    AppComponent, 
    AnimateComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

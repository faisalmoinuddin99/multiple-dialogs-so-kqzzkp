import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Dialog1Component } from './dialog1.component';
import { Dialog2Component } from './dialog2.component';

import { MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, Dialog1Component, Dialog2Component ],
  entryComponents: [Dialog1Component, Dialog2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsMessageComponent } from './rxjs/rxjs.message.compoent';
import { Parent } from './msg/Parent';
import { Child } from './msg/Child';


import {MessageService} from './rxjs/MessageService';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    RxjsMessageComponent,
    Parent,
    Child
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

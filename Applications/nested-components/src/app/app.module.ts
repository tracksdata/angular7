import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { NosPipe } from './nos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    NosPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

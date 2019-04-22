import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ // '@' is called decarator
  declarations: [ // user created components
    AppComponent
  ],
  imports: [ // built in angular modules
    BrowserModule
  ],
  providers: [], // For registration of service classes
  bootstrap: [AppComponent] // opens first component
})
export class AppModule { }

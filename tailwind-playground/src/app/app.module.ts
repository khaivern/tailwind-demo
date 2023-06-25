import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RedComponent } from './components/red/red.component';
import { BlueComponent } from './components/blue/blue.component';
import { GreenComponent } from './components/green/green.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RedComponent,
    BlueComponent,
    GreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

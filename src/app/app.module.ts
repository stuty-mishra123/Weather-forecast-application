import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DirectAccessGuard } from './services/auth-guard-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DirectAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

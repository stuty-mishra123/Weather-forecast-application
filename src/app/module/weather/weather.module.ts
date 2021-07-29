import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  declarations: [HomePageComponent, DetailsPageComponent]
})
export class WeatherModule { }

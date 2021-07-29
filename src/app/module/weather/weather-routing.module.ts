import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {DetailsPageComponent} from './details-page/details-page.component';
import { DirectAccessGuard } from '../../services/auth-guard-service';

const routes: Routes = [
  {
    path : '',
    component : HomePageComponent
  },
  {
    path : 'details/:id',
    component : DetailsPageComponent,
    canActivate: [DirectAccessGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }

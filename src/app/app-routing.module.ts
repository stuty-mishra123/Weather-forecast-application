import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "home",
		loadChildren: "./module/weather/weather.module#WeatherModule"
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})



export class AppRoutingModule { }

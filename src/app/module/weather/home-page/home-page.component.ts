import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cityData;
  title;
  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }
   
  ngOnInit() {

    /* Found Ids of 5 cities in London circle using API " http://api.openweathermap.org/data/2.5/find?lat=51.5085&lon=-0.1257&cnt=5&appid=3d8b309701a13f65b660fa2c64cdc517" used those IDs to fetch data for each city .

    Used individual API as the API that takes multiple cities does not have "sys" object to fetch sunset and sunrise time  */

    let serviceData1 = this.http.get("https://openweathermap.org/data/2.5/weather?id=2643743&appid=439d4b804bc8187953eb36d2a8c26a02");
    let serviceData2 = this.http.get("https://openweathermap.org/data/2.5/weather?id=2634341&appid=439d4b804bc8187953eb36d2a8c26a02");
    let serviceData3 = this.http.get("https://openweathermap.org/data/2.5/weather?id=6545250&appid=439d4b804bc8187953eb36d2a8c26a02");
    let serviceData4 = this.http.get("https://openweathermap.org/data/2.5/weather?id=6690574&appid=439d4b804bc8187953eb36d2a8c26a02");
    let serviceData5 = this.http.get("https://openweathermap.org/data/2.5/weather?id=2643741&appid=439d4b804bc8187953eb36d2a8c26a02");
    

    const arrayCall = [serviceData1,serviceData2,serviceData3,serviceData4,serviceData5];
    let multicall = forkJoin(arrayCall);
    multicall.subscribe(
      data => {
        this.cityData = data;
      },
      error => {
        console.log(error);
      }
    );
    this.title = `Current Weather details for 5 cities`;
  }

  navigateTodetails = (id) => {
    console.log(id);
    this.router.navigate(['home/details',id]);
  }
}

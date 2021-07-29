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
  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }
    title;
  ngOnInit() {
    let serviceData1 = this.http.get("https://openweathermap.org/data/2.5/weather?id=2643743&appid=439d4b804bc8187953eb36d2a8c26a02");
    let serviceData2 = this.http.get("https://openweathermap.org/data/2.5/weather?id=2634341&appid=439d4b804bc8187953eb36d2a8c26a02");
    let serviceData3 = this.http.get("https://openweathermap.org/data/2.5/weather?id=6545250&appid=439d4b804bc8187953eb36d2a8c26a02");
    let serviceData4 = this.http.get("https://openweathermap.org/data/2.5/weather?id=6690574&appid=439d4b804bc8187953eb36d2a8c26a02");
    let serviceData5 = this.http.get("https://openweathermap.org/data/2.5/weather?id=2643741&appid=439d4b804bc8187953eb36d2a8c26a02");
    

    const arrayCall = [serviceData1,serviceData2,serviceData3,serviceData4,serviceData5];
    let multicall = forkJoin(arrayCall);
    multicall.subscribe(
      data => {
        console.log(data);
        this.cityData = data;
      },
      error => {
        console.log(error);
      }
    );
    this.title = `Current Weather details for 5 cities`
  }

  navigateTodetails = (id) => {
    console.log(id);
    this.router.navigate(['home/details',id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  templateData;
  title;
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    const secondParam: string = this.route.snapshot.params.id;
    console.log(secondParam)
           //    http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=3d8b309701a13f65b660fa2c64cdc517
    let url = "http://api.openweathermap.org/data/2.5/forecast?id=" + secondParam + "&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517";
    let apiData = this.http.get(url);

    apiData.subscribe(
      res => {
        this.templateData = res['list'].filter((elem) => elem.dt_txt.includes("21:00:00"));
        this.title = `Weather forecast for next 5 days of  ${res['city']['name']} at 9:00 PM`;
        console.log(this.templateData);
      }
    )
  }

}

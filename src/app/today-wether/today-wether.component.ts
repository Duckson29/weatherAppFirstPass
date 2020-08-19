import { Component, OnInit } from '@angular/core';
import { WetherServiceService } from '../wether-service.service'

@Component({
  selector: 'app-today-wether',
  templateUrl: './today-wether.component.html',
  styleUrls: ['./today-wether.component.css']
})
export class TodayWetherComponent implements OnInit {
  lat;
  lon;
  wether;
  todayString = new Date();

  constructor(private wetherService: WetherServiceService) { }

  name: string;
  ngOnInit(): void {
    this.getLocation();
    console.log(this.todayString);
  }
  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.wetherService.GetcurrentWetherData(this.lat, this.lon).subscribe(data => {
          this.wether = data;
          // console.log('getLocation', this.wether)
        });
      }))
    }
  }
  getCityWeather(name : string) {
    console.log('getCityWeather', name);
    this.wetherService.GetcurrentWetherDataByCityName(name).subscribe(d => {
      this.wether = d;
      // console.log(d);
    });
  }
}

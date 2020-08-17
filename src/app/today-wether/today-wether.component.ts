import { Component, OnInit } from '@angular/core';
import {WetherServiceService} from '../wether-service.service'

@Component({
  selector: 'app-today-wether',
  templateUrl: './today-wether.component.html',
  styleUrls: ['./today-wether.component.css']
})
export class TodayWetherComponent implements OnInit {
  lat;
  lon;
  wether;
  constructor(private wetherService : WetherServiceService) { }

  ngOnInit(): void {
    this.getLocation();
  }
  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success =>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.wetherService.GetcurrentWetherData(this.lat,this.lon).subscribe(data => {
          this.wether = data;
        });
      }))
    }
  }
  getCityWeatther(name:string){
    this.wetherService.GetcurrentWetherDataByCityName(name);
  }
}

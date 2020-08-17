import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
// openwethermap Api key 208f98b26b22735d7c755054886a0da8
@Injectable({
  providedIn: 'root'
})
export class WetherServiceService {
  apiKey = "208f98b26b22735d7c755054886a0da8";
  url = "https://api.openweathermap.org/data/2.5/weather";
  constructor(private http: HttpClient) { }

  GetcurrentWetherData(lat ,lon){
    let params = new HttpParams().set('lat',lat).set('lon',lon).set('units','metric').set('appid',this.apiKey)
    return this.http.get(this.url,{ params });
  }
}

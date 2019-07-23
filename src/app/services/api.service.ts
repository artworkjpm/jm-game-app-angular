import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getImages(searchItem: string): Observable<any> {
    const API_KEY = "538780-df31edf39b820c4de87a19f6f";
    const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchItem);
    const api = URL;
    return this.httpClient.get(api);
  }
}

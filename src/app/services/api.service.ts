import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getImages(searchItem: string): Observable<any> {
    const API_KEY = "538780-df31edf39b820c4de87a19f6f";
    const URL =
      "https://pixabay.com/api/?key=" +
      API_KEY +
      "&q=" +
      encodeURIComponent(searchItem) +
      "&image_type=illustration";
    const api = URL;
    return this.httpClient.get(api);
  }

  fixedImage(): Observable<any> {
    const URL =
      "https://pixabay.com/api/?key=538780-df31edf39b820c4de87a19f6f&id=158463";
    const api = URL;
    return this.httpClient.get(api);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "538780-df31edf39b820c4de87a19f6f";
const urlPath = "https://pixabay.com/api/?key=";

@Injectable()
export class AppService {
  constructor(public httpClient: HttpClient) {}

  fixedImage(): Observable<any> {
    const URL = "https://pixabay.com/api/?key=538780-df31edf39b820c4de87a19f6f&id=158463";
    return this.httpClient.get(URL);
  }

  CartoonChooser(searchItem: string): Observable<any> {
    const URL = urlPath + API_KEY + "&q=" + encodeURIComponent(searchItem) + "&image_type=illustration";
    return this.httpClient.get(URL);
  }

  PhotoWinnerChooser(searchItem: string): Observable<any> {
    const URL = urlPath + API_KEY + "&q=" + encodeURIComponent(searchItem) + "&image_type=photo";
    return this.httpClient.get(URL);
  }
}
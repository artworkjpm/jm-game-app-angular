import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TestContentService {
  constructor(private httpClient: HttpClient) {}

  getImages(): Observable<any> {
    const api = "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get(api);
  }
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TestContentService {
  constructor() {}

  getContent() {
    return "hello service asshole";
  }
}

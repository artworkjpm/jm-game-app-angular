import { Component, OnInit } from "@angular/core";
import { TestContentService } from "./test-content.service";

@Component({
  selector: "app-mytest",
  templateUrl: "./mytest.component.html",
  styleUrls: ["./mytest.component.scss"]
})
export class MytestComponent implements OnInit {
  Images: string;
  constructor(private appService: TestContentService) {}

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.appService.getImages().subscribe(data => (this.Images = data), error => console.log(error));
  }
}

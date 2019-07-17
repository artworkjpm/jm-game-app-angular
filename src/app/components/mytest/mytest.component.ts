import { Component, OnInit } from "@angular/core";
import { TestContentService } from "../../test-content.service";

@Component({
  selector: "app-mytest",
  templateUrl: "./mytest.component.html",
  styleUrls: ["./mytest.component.scss"]
})
export class MytestComponent implements OnInit {
  testContent: string;
  constructor(private testContentService: TestContentService) {}

  ngOnInit() {
    this.testContent = this.testContentService.getContent();
  }
}

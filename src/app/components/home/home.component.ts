import { Component, OnInit } from "@angular/core";
import { AppService } from "../../services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  Images: any;
  searchInput: string;

  constructor(public appService: AppService) {}

  ngOnInit() {
    // this.getImages();
  }

  submitSearch(text: string) {
    console.log(text);
    this.searchInput = text;
    this.getImages();
  }

  getImages() {
    let searchItem = this.searchInput;
    return this.appService
      .getImages(searchItem)
      .subscribe(
        data => (
          (this.Images = data.hits[Math.floor(Math.random() * 20)]),
          console.log(data.hits, data.hits.length)
        ),
        error => console.log(error)
      );
  }
}

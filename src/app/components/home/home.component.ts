import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  CartoonImage: { previewURL: string; tags: string };
  CartoonTags: any;
  PhotoWinner: { previewURL: string; tags: string };
  PhotoRandom1: { previewURL: string; tags: string };
  PhotoRandom2: { previewURL: string; tags: string };
  FixedImage: any;
  searchInput: string;
  winner: boolean = false;
  wrong1: boolean = false;
  wrong2: boolean = false;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {}
  //using jquery to randomize the three photo options
  randomize() {
    var cards = $(".random");
    for (var i = 0; i < cards.length; i++) {
      var target = Math.floor(Math.random() * cards.length - 1) + 1;
      var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
      cards.eq(target).before(cards.eq(target2));
    }
  }

  rightFire() {
    this.winner = !this.winner;
    this.wrong1 = false;
    this.wrong2 = false;
  }
  wrong1Fire() {
    this.wrong1 = !this.wrong1;
    this.wrong2 = false;
    /*  setTimeout(() => {
      $(".wrong1").hide(), (this.wrong1 = false);
    }, 1000); */
  }

  wrong2Fire() {
    this.wrong2 = !this.wrong2;
    this.wrong1 = false;
    /*  setTimeout(() => {
      $(".wrong2").hide(), (this.wrong2 = false);
    }, 1000); */
  }

  getFixedImage() {
    return this.apiService.fixedImage().subscribe(data => {
      this.FixedImage = data.hits[0];
    });
  }

  submitSearch(text: string) {
    console.log("search text: " + text);
    this.searchInput = text;

    this.winner = false;
    this.wrong1 = false;
    this.wrong2 = false;
    this.CartoonChooser();
    this.randomize();
  }

  RandomMath() {
    let randomNumber = Math.floor(Math.random() * 50);
    console.log("randomNumber: " + randomNumber);
    return randomNumber;
  }

  CartoonChooser() {
    let searchItem = this.searchInput;
    return this.apiService.CartoonChooser(searchItem).subscribe(
      data => {
        this.CartoonImage = data.hits[this.RandomMath()];
        this.CartoonTags = this.CartoonImage.tags.split(",").splice(-1);
        console.log("tags1: " + this.CartoonTags);
        this.PhotoWinnerChooser();
      },
      error => console.log(error)
    );
  }

  PhotoWinnerChooser() {
    //get last word from tags
    let searchItem: string;
    if (this.searchInput === "") {
      var CartoonTagsCleaned = this.CartoonTags;
      console.log("tag cleaned2: " + CartoonTagsCleaned);
      searchItem = CartoonTagsCleaned;
    } else {
      searchItem = this.searchInput;
    }
    this.apiService.PhotoWinnerChooser(searchItem).subscribe(
      data => {
        this.PhotoWinner = data.hits[this.RandomMath()];
      },
      error => console.log(error)
    );

    this.apiService
      .PhotoWinnerChooser("")
      .subscribe(data => ((this.PhotoRandom1 = data.hits[this.RandomMath()]), console.log(this.PhotoRandom1, data)), error => console.log(error));

    this.apiService.PhotoWinnerChooser("").subscribe(data => (this.PhotoRandom2 = data.hits[this.RandomMath()]), error => console.log(error));
  }

  ngAfterViewInit() {
    this.submitSearch("");
  }
}

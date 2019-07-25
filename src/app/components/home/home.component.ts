import { Component, OnInit } from "@angular/core";
import { AppService } from "../../services/api.service";

declare var $: any;

const RandomMath = () => {
  return Math.floor(Math.random() * 20);
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  CartoonImage: string;
  PhotoWinner: string;
  PhotoRandom1: string;
  PhotoRandom2: string;
  FixedImage: any;
  searchInput: string;
  winner: boolean = false;
  wrong1: boolean = false;
  wrong2: boolean = false;

  constructor(public appService: AppService) {}

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
  }
  wrong1Fire() {
    this.wrong1 = !this.wrong1;
    setTimeout(() => {
      $(".wrong1").hide(), (this.wrong1 = false);
    }, 1000);
  }

  wrong2Fire() {
    this.wrong2 = !this.wrong2;
    setTimeout(() => {
      $(".wrong2").hide(), (this.wrong2 = false);
    }, 1000);
  }

  getFixedImage() {
    return this.appService.fixedImage().subscribe(data => {
      this.FixedImage = data.hits[0];
    });
  }

  submitSearch(text: string) {
    console.log(text);
    this.searchInput = text;
    this.wrong1 = false;
    this.CartoonChooser();
    this.PhotoWinnerChooser();
    this.randomize();
  }

  CartoonChooser() {
    let searchItem = this.searchInput;
    return this.appService
      .CartoonChooser(searchItem)
      .subscribe(data => ((this.CartoonImage = data.hits[Math.floor(Math.random() * 20)]), console.log(this.CartoonImage, data)), error => console.log(error));
  }

  RandomMath() {
    return Math.floor(Math.random() * 20);
  }

  PhotoWinnerChooser() {
    let searchItem = this.searchInput;
    this.appService
      .PhotoWinnerChooser(searchItem)
      .subscribe(data => ((this.PhotoWinner = data.hits[RandomMath()]), console.log(this.PhotoWinner, data)), error => console.log(error));

    this.appService.PhotoWinnerChooser("dog").subscribe(data => ((this.PhotoRandom1 = data.hits[RandomMath()]), console.log(this.PhotoRandom1, data)), error => console.log(error));

    this.appService.PhotoWinnerChooser("cat").subscribe(data => ((this.PhotoRandom2 = data.hits[RandomMath()]), console.log(this.PhotoRandom2, data)), error => console.log(error));
  }
}

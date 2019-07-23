import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MytestComponent } from "./components/mytest/mytest.component";
import { HomeComponent } from "./components/home/home.component";

//services
import { TestContentService } from "./components/mytest/test-content.service";
import { AppService } from "./services/api.service";

@NgModule({
  declarations: [AppComponent, MytestComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [TestContentService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}

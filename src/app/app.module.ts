import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytestComponent } from './components/mytest/mytest.component';
import { TestContentService } from './test-content.service';

@NgModule({
  declarations: [
    AppComponent,
    MytestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

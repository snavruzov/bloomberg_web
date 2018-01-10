import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { DealsComponent } from './deals/deals.component';
import { BrokenComponent } from './broken/broken.component';
import { StatsComponent } from './stats/stats.component';
import {UploadFileService} from "./upload-file.service";
import {DataServiceService} from "./data-service.service";
import {HttpClientModule} from "@angular/common/http";
import {PagerService} from "./pager.service";


@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    DealsComponent,
    BrokenComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UploadFileService, DataServiceService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

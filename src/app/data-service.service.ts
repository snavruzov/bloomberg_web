import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Broken} from "./broken";
import {Content} from "./content";
import {Observable} from "rxjs/Observable";
import {Deals} from "./deals";
import {Statistics} from "./statistics";

@Injectable()
export class DataServiceService {
  private dealsURL = "http://localhost:8080/deals";
  private brokenURL = "http://localhost:8080/broken";
  private statsURL = "http://localhost:8080/stat";

  constructor(private http: HttpClient) { }

  getTableBrokenData(page:number): Observable<Content<Broken[]>>{
    let pg = new HttpParams().append("page", page.toString());
    return this.http.get<Content<Broken[]>>(this.brokenURL, {params:pg})
  }

  getTableDealData(page:number): Observable<Content<Deals[]>>{
    let pg = new HttpParams().append("page", page.toString());
    return this.http.get<Content<Deals[]>>(this.dealsURL, {params:pg})
  }

  getTableStatsData(): Observable<Statistics[]>{
    return this.http.get<Statistics[]>(this.statsURL)
  }
}

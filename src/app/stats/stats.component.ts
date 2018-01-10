import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {Statistics} from "../statistics";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  statsData: Statistics[];
  constructor(private dataService:DataServiceService) { }

  getStatList(): void {
    this.dataService.getTableStatsData().subscribe(
      content => {
        this.statsData= content;
      },
      err => {
        console.log(err)
      });
  }

  ngOnInit() {
    this.getStatList()
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Broken} from "../broken";
import {DataServiceService} from "../data-service.service";
import {PagerService} from "../pager.service";

@Component({
  selector: 'app-broken',
  templateUrl: './broken.component.html',
  styleUrls: ['./broken.component.css']
})
export class BrokenComponent implements OnInit {
  brokenData: Broken[];
  pager:any = {};
  totalPage:number;
  constructor(private pagerService: PagerService,
              private dataService:DataServiceService) { }

  getBrokenList(page:number): void {
    this.dataService.getTableBrokenData(page-1).subscribe(
      content => {
        this.brokenData = content.content;
        this.totalPage = content.totalPages;

        if (page < 1 || page > this.pager.totalPages) {
          return;
        }
        this.pager = this.pagerService.getPager(content.totalPages, this.totalPage, page);
      },
      err => {
        console.log(err)
      });
  }

  ngOnInit() {
    this.getBrokenList(1);
  }

}

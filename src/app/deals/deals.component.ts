import { Component, OnInit } from '@angular/core';
import {Deals} from "../deals";
import {DataServiceService} from "../data-service.service";
import {PagerService} from "../pager.service";

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  dealData: Deals[];
  pager:any = {};
  totalPage:number;
  constructor(private dataService:DataServiceService,
              private pagerService: PagerService) { }

  getDealList(page:number): void {
    this.dataService.getTableDealData(page-1).subscribe(
      content => {
        this.dealData = content.content;
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
    this.getDealList(1)
  }

}

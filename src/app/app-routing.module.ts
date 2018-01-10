import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormUploadComponent} from "./form-upload/form-upload.component";
import {DealsComponent} from "./deals/deals.component";
import {BrokenComponent} from "./broken/broken.component";
import {StatsComponent} from "./stats/stats.component";

const routes: Routes = [
  {path: '', redirectTo:'/upload', pathMatch:'full'},
  {path: 'upload', component: FormUploadComponent},
  {path: 'deals/:page', component: DealsComponent},
  {path: 'broken/:page', component: BrokenComponent},
  {path: 'stats', component: StatsComponent},
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

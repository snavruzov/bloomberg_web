import {Csvrespo} from "./csvrespo";
export class Fileinfo {
  name:string;
  size:number;
  type:string;
  percentage:number;
  csvinfo:Csvrespo;
  error:string;


  constructor(name: string, size: number, type: string, percentage: number, csvinfo: Csvrespo, error: string) {
    this.name = name;
    this.size = size;
    this.type = type;
    this.percentage = percentage;
    this.csvinfo = csvinfo;
    this.error = error;
  }
}

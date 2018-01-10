export class Result {
  validDeals:number;
  invalidDeals:number;
  benchmark:number;


  constructor(validDeals: number, invalidDeals: number, benchmark: number) {
    this.validDeals = validDeals;
    this.invalidDeals = invalidDeals;
    this.benchmark = benchmark;
  }
}

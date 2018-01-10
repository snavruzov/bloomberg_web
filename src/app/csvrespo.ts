import {Result} from "./result";
export class Csvrespo {
  code:string;
  message:string;
  result:Result;
  error:string;


  constructor(code: string, message: string, result: Result, error: string) {
    this.code = code;
    this.message = message;
    this.result = result;
    this.error = error;
  }
}

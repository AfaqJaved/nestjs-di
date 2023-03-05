
import {red , green , blue} from "chalk";
import { Injectable } from "@nestjs/common";



@Injectable()
export class LoggingProvider {

  loggError(message : string) {
    console.log(red(message));
  }

  loggSuccess(message : string) {
    console.log(green(message));
  }

  loggInfo(message : string) {
    console.log(blue(message));
  }
}

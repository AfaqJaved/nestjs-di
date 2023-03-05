

import { Injectable } from "@nestjs/common";


@Injectable()
export class PersonProvider {
  public getPerson() {
    return {
      name : "Afaq",
      age : 22
    }
  }
}

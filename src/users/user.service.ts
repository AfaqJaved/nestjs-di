import { Injectable } from "@nestjs/common";


@Injectable()
export class UserMockService {
  getUsers() {
    return "This is users from mock Service"
  }
}


@Injectable()
export class UserProdService {
  getUsers(){
    return "This is users form production service";
  }
}

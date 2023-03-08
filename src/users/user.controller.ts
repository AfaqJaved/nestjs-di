import { Controller, Get, Inject } from "@nestjs/common";
import { UserMockService, UserProdService } from "./user.service";


@Controller("users")
export class UserController {

  constructor(
    @Inject("USER_SERVICE") private readonly userService : UserProdService | UserMockService
  ) {
  }

  @Get()
  getUsers() : string {
    return this.userService.getUsers();
  }
}

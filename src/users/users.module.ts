

import { Inject, Module } from "@nestjs/common";
import { UserMockService, UserProdService } from "./user.service";
import { UserController } from "./user.controller";



//Mock service
//prod service

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {provide : "USER_SERVICE" , useClass : process.env.NODE_ENV == "dev" ? UserMockService : UserProdService}
  ],
})
export class UsersModule {

}

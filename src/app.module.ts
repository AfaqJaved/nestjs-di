

import { Inject, Module } from "@nestjs/common";
import { DIModule } from "./di/di.module";
import { PersonProvider } from "./di/person.provider";
import { LoggingProvider } from "./di/providers/logging.provider";
import { Pool } from "pg";
import { PG_PROVIDER } from "./di/providers/pg.provider";
import { UsersModule } from "./users/users.module";


//Standard Providers
// @Injectable

//Custom Providers
// custom object save ioc container
// object
// unique id string

//useclass
// differen conditions diffrent provider



@Module({
  imports: [DIModule , UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(
    // private readonly person : PersonProvider,
    // private readonly log : LoggingProvider,
    // @Inject("APP_CONSTANTS") private readonly constants : any
    @Inject(PG_PROVIDER) private readonly database : Pool

  ) {
     this.database.query("SELECT *FROM USERS").then((data)=>{
       console.log(data.rows);
     })
    // console.log(constants.db_username);
    // console.log(constants.db_password);
    // // log.loggSuccess("Success Message");
    // // log.loggError("Error Message");
    // // log.loggInfo("Info Message");
  }
}

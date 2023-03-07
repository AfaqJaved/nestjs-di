




import { Inject, Module } from "@nestjs/common";
import { PersonProvider } from "./person.provider";
import { LoggingProvider } from "./providers/logging.provider";
import { dbProvider } from "./providers/pg.provider";

export const constants = {
  db_username : "notezz",
  db_password : "admin"
}


@Module({
  imports: [],
  controllers: [],
  providers: [
    PersonProvider ,
    LoggingProvider ,
    {useValue : constants , provide : "APP_CONSTANTS"},
    dbProvider
  ],
  exports : [
    PersonProvider,
    LoggingProvider,
    {useValue : constants , provide : "APP_CONSTANTS"},
    dbProvider
  ]
})
export class DIModule {




  constructor(
    private readonly person : PersonProvider,
    private readonly log : LoggingProvider,
    @Inject("APP_CONSTANTS") private readonly constants : any

  ) {

    this.log.loggSuccess("Success Message");
    this.log.loggError("Error Message");
    this.log.loggInfo("Info Message");
  }
}

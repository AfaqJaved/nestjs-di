




import { Inject, Module } from "@nestjs/common";
import { PersonProvider } from "./person.provider";
import { LoggingProvider } from "./providers/logging.provider";

const constants = {
  db_username : "notezz",
  db_password : "admin"
}


@Module({
  imports: [],
  controllers: [],
  providers: [
    PersonProvider ,
    LoggingProvider ,
    {useValue : constants , provide : "APP_CONSTANTS"}
  ],
  exports : [
    PersonProvider,
    LoggingProvider,
    {useValue : constants , provide : "APP_CONSTANTS"}
  ]
})
export class DIModule {
  constructor(
    private readonly person : PersonProvider,
    private readonly log : LoggingProvider,
    @Inject("APP_CONSTANTS") private readonly constants : any

  ) {

    console.log(constants.db_username);
    console.log(constants.db_password);
    // log.loggSuccess("Success Message");
    // log.loggError("Error Message");
    // log.loggInfo("Info Message");
  }
}

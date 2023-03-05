

import { Inject, Module } from "@nestjs/common";
import { DIModule } from "./di/di.module";
import { PersonProvider } from "./di/person.provider";
import { LoggingProvider } from "./di/providers/logging.provider";


//Standard Providers
// @Injectable

//Custom Providers
// custom object save ioc container
// object
// unique id string

@Module({
  imports: [DIModule],
  controllers: [],
  providers: [],
})
export class AppModule {
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

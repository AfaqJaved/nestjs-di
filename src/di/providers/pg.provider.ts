

import {Pool} from "pg";


//unique id
export const PG_PROVIDER = "PG_PROVIDER";


export const dbProvider =  {
  provide : PG_PROVIDER,
  useValue : new Pool({
    user : "postgres",
    password : "",
    host : "localhost",
    port : 5432,
    database : "test"
  })
}

import ck from 'ckey'

const mySQLConfig = {
  host: process.env.SQL_HOSTG,
  user: process.env.SQL_USERG,
  password: process.env.SQL_PASSWORDG,
  database: process.env.SQL_DATABASEG
  // port: ck.SQL_PORT
  };

  export default mySQLConfig
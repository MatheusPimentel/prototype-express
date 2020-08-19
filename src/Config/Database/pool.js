import { Pool } from 'pg'

import dotenv from 'dotenv'

dotenv.config()

let pool = undefined
const getInstance = () => {
  if (!pool) {
    pool = new Pool({
      user: process.env.user,
      host: process.env.host,
      database: process.env.database,
      password: process.env.password,
      port: process.env.port,
    })
  }
  return pool
}

export default getInstance()

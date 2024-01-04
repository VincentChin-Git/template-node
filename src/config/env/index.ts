import { z } from 'zod'

import parsed from './_parsed'

/** make sure info in .env file is correct, need to validate  */
const Validation = z
  .object({
    // server
    SERVICE_URL: z.string(),
    PORT: z.number().or(z.string()),

    // mongodb
    DATABASE_ADDRESS: z.string(),
  })
  .strict()

Validation.parse(parsed)

const EnvConfig = {
  // server

  serviceUrl: parsed['SERVICE_URL'],
  port: Number(parsed['PORT']),

  // mongodb
  databaseAddress: parsed['DATABASE_ADDRESS'],
}

export default EnvConfig

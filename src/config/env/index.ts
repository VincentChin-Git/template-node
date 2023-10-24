import { z } from 'zod'

import parsed from './_parsed'

/** make sure info in .env file is correct, need to validate  */
const Validation = z
    .object({
        // cryptoKey, to encrypt passwood
        // jwt token key
        CRYPTO_KEY: z.string(),
        JWT_ACCESS_TOKEN_KEY: z.string(),
        JWT_REFRESH_TOKEN_KEY: z.string(),
        // server
        SERVICE_URL: z.string(),
        PORT: z.number().or(z.string()),
        // mongodb
        DATABASE_ADDRESS: z.string(),
        // // C端server
    })

    .strict()

Validation.parse(parsed)

const EnvConfig = {
    // cryptoKey, to encrypt passwood
    // jwt token key
    cryptoKey: parsed['CRYPTO_KEY'],
    accessTokenKey: parsed['JWT_ACCESS_TOKEN_KEY'],
    refreshTokenKey: parsed['JWT_REFRESH_TOKEN_KEY'],
    // server
    serviceUrl: parsed['SERVICE_URL'],
    port: Number(parsed['PORT']),
    // mongodb
    databaseAddress: parsed['DATABASE_ADDRESS'],
}

export default EnvConfig

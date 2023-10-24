import type { Context, Middleware, Next } from 'koa'

import throwError from '../utils/throwError'

import EnvConfig from '../config/env'
import { TokenVerifyFail } from '../config/errorMsg/_general'
import { verifyToken } from '../utils/token'

const JwtVerify: Middleware = async (ctx: Context, next: Next) => {
    if (ctx.method == 'OPTIONS') {
        await next()
    } else {
        let tokenError = false
        // try {
        //     const BearerToken = ctx.request.header.authorization || ''
        //     const { decoded } = verifyToken({
        //         BearerToken,
        //         secret: EnvConfig.accessTokenKey,
        //     })
        //     ctx.key = decoded.data.key
        // } catch (error) {
        //     tokenError = true
        // }
        if (!tokenError) {
            await next()
        } else {
            throwError(TokenVerifyFail)
        }
    }
}

export default JwtVerify

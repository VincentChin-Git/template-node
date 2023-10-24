import type { Context, Middleware, Next } from 'koa'

// import EnvConfig from '../config/env'
import { TokenVerifyFail } from '../config/errorMsg/_general'
import throwError from '../utils/throwError'
// import { verifyToken } from '../utils/token'

const JwtVerify: Middleware = async (ctx: Context, next: Next) => {
    if (ctx.method == 'OPTIONS') {
        await next()
    } else {
        const tokenError = false
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

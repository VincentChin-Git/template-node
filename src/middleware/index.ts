import type { Middleware } from 'koa'
import KoaBody from 'koa-body'
// Compose func
import Compose from 'koa-compose'
import Cors from 'koa2-cors'

import ErrorHandle from './errorHandle'
import JwtVerify from './jwtVerify'
import { Logger } from './logger'

// global middleware
const ComposedMiddleware: Middleware = Compose([
    Logger,
    ErrorHandle,
    KoaBody({ multipart: true }),
    Cors(),
    JwtVerify,
    // verifyIp and account
])

export default ComposedMiddleware

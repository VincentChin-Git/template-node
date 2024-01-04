import type { Middleware } from 'koa'
import KoaBody from 'koa-body'
// Compose func
import Compose from 'koa-compose'
import Cors from 'koa2-cors'

import { Logger } from './logger'

// global middleware
const ComposedMiddleware: Middleware = Compose([
  Logger,
  KoaBody({ multipart: true }),
  Cors(),
  // verifyIp and account
])

export default ComposedMiddleware

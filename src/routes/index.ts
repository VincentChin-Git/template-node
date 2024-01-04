import Compose from 'koa-compose'
import type { IMiddleware } from 'koa-router'
import Router from 'koa-router'

import TestRouter from './test'

const routers: Router<any, object>[] = [...TestRouter]

const middlewareArray = routers.reduce((acc: IMiddleware[], router) => {
  acc.push(router.routes())
  acc.push(router.allowedMethods())
  return acc
}, [])

const RouterMiddleware = Compose(middlewareArray)

export default RouterMiddleware

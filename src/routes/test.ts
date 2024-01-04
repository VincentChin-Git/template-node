import Router from 'koa-router'

import { routePrefix } from './prefix'
import * as Controller from '../controllers/test'

const v1 = new Router({ prefix: routePrefix })

v1.get('/test', Controller.test)

export default [v1]

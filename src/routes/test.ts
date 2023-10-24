import Router from 'koa-router'

import { test } from '../controllers/test'
import { routePrefix } from './prefix'

const v1 = new Router({ prefix: routePrefix + '/tests' })

v1.get('/tests', test)

export default [v1]

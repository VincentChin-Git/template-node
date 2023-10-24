import Router from 'koa-router'

import { routePrefix } from './prefix'
import { test } from '../controllers/test'

const v1 = new Router({ prefix: routePrefix + '/tests' })

v1.get('/tests', test)

export default [v1]

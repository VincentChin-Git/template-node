import type { Context, Next } from 'koa'
import { z } from 'zod'

import { ValidateError } from '../config/errorMsg/_general'
import throwError from '../utils/throwError'

const A = z.object({})
const B = z.object({}).strict()

const RouteValidate = (schema: typeof A | typeof B) => {
    return async (ctx: Context, next: Next) => {
        const parseInfo = {
            body: ctx.request.body,
            query: ctx.request.query,
            params: ctx.params,
            files: ctx.request.files,
        }
        const data = schema.safeParse(parseInfo)
        if (data.success) {
            await next()
        } else {
            const zodError = data.error
            const formatMsg: unknown = zodError.format()
            return throwError({
                message: `Validate Fail: ${JSON.stringify(formatMsg)}`,
                code: ValidateError.code,
            })
        }
    }
}

export default RouteValidate

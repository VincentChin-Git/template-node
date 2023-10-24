import type { Context, Middleware, Next } from 'koa'

export const Logger: Middleware = async (ctx: Context, next: Next) => {
    const start = Date.now()
    await next()
    const timeCost = (Date.now() - start) / 1000 + 's'
    const { status, method, url } = ctx
    console.log(
        `[${status}] [${method}] ${url} (${timeCost}) ${new Date().toISOString()}`
    )
}

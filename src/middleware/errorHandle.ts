import type { Context, Middleware, Next } from 'koa'

import type { IErrorFormat } from '../utils/throwError'

const defaultError: Required<IErrorFormat> = {
    status: 500,
    code: 500,
    message: 'Internal Server Error',
}

const ErrorHandle: Middleware = async (ctx: Context, next: Next) => {
    try {
        process.on('unhandledRejection', function () {
            console.log('/监听Promise没有被捕获的失败函数')
            console.log('UnhandledPromiseRejectionWarning 会导致node崩溃')
        })
        await next()
    } catch (error: unknown) {
        const { code, message, status, name } = error as Error & {
            code: number
            status: number
            message?: string
        }
        console.log(error)
        console.log(code, message, name, 'error code msg')
        ctx.status = status || defaultError.status // typeorm error code will be
        const payload = {
            code: code || defaultError.code,
            message: message || defaultError.message,
        }
        ctx.body = payload
    }
}

export default ErrorHandle

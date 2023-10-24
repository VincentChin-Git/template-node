import { Context } from 'koa'
import * as TestServide from '../services/test'

export const test = async (ctx: Context) => {
    // const data = ctx.request.body
    const res = await TestServide.test()
    ctx.body = res
}

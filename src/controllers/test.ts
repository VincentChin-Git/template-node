import type { Context } from 'koa'

import * as TestService from '../services/test'
import { generateRes, generateResError } from '../utils'

export const test = async (ctx: Context) => {
  // const { ...data } = ctx.request.body;
  const { ...data }: any = ctx.request.query as any

  try {
    const res = await TestService.test(data)
    generateRes(ctx, res)
  } catch (error) {
    const msg = (error as any as Error).message
    generateResError(ctx, msg || undefined)
  }
}

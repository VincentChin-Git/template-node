import dayjs from 'dayjs'
import type { Context } from 'koa'

export const generateTimestamps = (
  start: number = dayjs().subtract(180, 'days').valueOf(),
) => {
  // default start from 180 days ago
  const timestamps: number[][] = []
  const end = dayjs().valueOf()
  const interval = 12 * 60 * 60 * 1000
  while (start < end) {
    const newStart = start + interval
    timestamps.push([start + 1, newStart])
    start = newStart
  }
  return timestamps
}

export const generateResError = (
  ctx: Context,
  msg: string = 'Please try again later',
  code: string = '999999',
) => {
  ctx.status = 400
  ctx.body = { errCode: code, errMessage: msg }
}

export const generateRes = (ctx: Context, data: any, code: number = 200) => {
  ctx.status = 200
  ctx.body = { data, code, success: true }
}

export const generateResPaging = (
  ctx: Context,
  data: any,
  count: number,
  code: number = 200,
) => {
  ctx.status = 200
  ctx.body = { data, code, count, success: true }
}

export const convertPage = ({
  pageSize,
  current,
}: {
  pageSize?: number
  current?: number
}) => {
  const limit = (pageSize && +pageSize) || 10
  const skip = limit * (((current && +current) || 1) - 1)
  return { limit, skip }
}

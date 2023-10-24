import httpStatus from 'http-status'

export interface IErrorFormat {
    code: number
    message: string
    status?: number
}

export default function throwError({
    code,
    message,
    status = httpStatus.BAD_REQUEST,
}: IErrorFormat) {
    const err = new Error(message) as Error & IErrorFormat
    err.code = code
    err.status = status
    throw err
}

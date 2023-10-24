import type { IErrorFormat } from '../../utils/throwError'

export const TokenVerifyFail: IErrorFormat = {
    code: 1001,
    message: 'Token Verify Failed',
    status: 401,
}

export const ValidateError: IErrorFormat = {
    code: 1002,
    message: '',
}

export const NotFoundError: IErrorFormat = {
    code: 1003,
    message: 'Not Found',
}

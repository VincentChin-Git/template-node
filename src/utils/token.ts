import * as Jwt from 'jsonwebtoken'

import { TokenVerifyFail } from '../config/errorMsg/_general'

import throwError from './throwError'

export const generateTokens = ({
    data,
    accessTokenKey,
    refreshTokenKey,
}: {
    data: unknown
    accessTokenKey?: string
    refreshTokenKey?: string
}) => {
    return {
        accessToken:
            accessTokenKey &&
            Jwt.sign({ data }, accessTokenKey, { expiresIn: '30m' }),
        refreshToken:
            refreshTokenKey &&
            Jwt.sign({ data, refresh: true }, refreshTokenKey, {
                expiresIn: '24h',
            }),
    }
}

/**
 * verify token
 */
export const verifyToken = ({
    BearerToken,
    secret,
}: {
    BearerToken: string
    secret: string
}) => {
    const resolvedToken = BearerToken.split('Bearer ')[1]
    const decoded: any = Jwt.verify(resolvedToken, secret)
    if (!decoded || !decoded.data || !decoded.data.username) {
        throwError(TokenVerifyFail)
    }
    return { resolvedToken, decoded }
}

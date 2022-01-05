import { TokenBase, TokenGenerator } from 'ts-token-generator'

export const generator = global.generator || new TokenGenerator({
    baseEncoding: TokenBase.BASE36,
    bitSize: 128,
})

if (process.env.NODE_ENV !== 'production') global.generator = generator
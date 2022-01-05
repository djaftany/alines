import { isAuth } from "../../../src/main/middleware"
import { save, get } from "../../../src/main/user"
import { generator } from '../../../src/main/generator'
import { emails, send } from "../../../src/service/email"

const handlers = {
    post: async ({ body }, response) => {
        const code = generator.generate().substring(0, 4)

        await send(emails.signup({
            token: await save(body),
            code: code,
            name: body.name,
            email: body.email
        }))
        
        response.status(200).json({ code })
    },
    get: async (request, response) => {
        response.status(200).json(await get())
    }
}

const handler = async (request, response) => {
    if (isAuth(request, response)) {
        try {
            return handlers[request.method.toLowerCase()](request, response)
        } catch (error) {
            return response.status(405).end(`Method ${request.method} not supported.`)
        }
    }
}

export default handler
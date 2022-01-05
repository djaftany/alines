import { isAuth } from "../../../lib/middleware"
import { save, get } from "../../../lib/user"
import { generator } from '../../../lib/generator'
import { emails, send } from "../../../email"

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
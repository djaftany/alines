import { get, update } from "../../../src/main/user";
import { isAuth } from "../../../src/main/middleware"
import * as modes from "../../../src/main/auth";

const handlers = {
    post: async (request, response) => {
        const mode = modes[request.query.mode]
        if (mode) {
            response.status(200).json(await mode(await get(request.query.id)))
        } else {
            const data = request.body
            data.token = request.query.id
            response.status(200).json(await update(data))
        }
    },
    get: async (request, response) => {
        const user = await get(request.query.id)
        response.status(200).json(user?.state == 'VERIFIED' ? user : null)
    }
}

const handler = async (request, response) => {
    if (isAuth(request, response)) {
        try {
            return handlers[request.method.toLowerCase()](request, response)
        } catch (error) {
            response.status(405).end(`Method ${request.method} not supported.`)
        }
    }
}

export default handler
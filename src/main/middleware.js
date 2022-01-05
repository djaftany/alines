const isAuth = (request, response) => {
    if (request.query.api_secret != process.env.NEXT_PUBLIC_API_SECRET) {
        response.status(401).end('Permission denied.')
        return false
    }

    return true
}

export {
    isAuth
}
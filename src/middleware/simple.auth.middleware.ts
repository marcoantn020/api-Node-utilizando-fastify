export async function simpleAuthMiddleware(req, reply) {
    const authEmail = req.headers['email'];

    if (!authEmail) {
        reply.status(401).send({
            message: 'Auth email is required on header'
        })
    }
}
import {FastifyInstance} from "fastify";
import {UseUseCase} from "../usecases/use.usecase";
import {UserCreate} from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance) {
    const userUseCase = new UseUseCase();

    fastify.post<{Body: UserCreate}>('/', async (req, reply) => {
        const {name, email} = req.body
        try {
            const data = await userUseCase.create({
                name,
                email
            })
            return reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })

    fastify.get('/', (request, reply) => {
        return reply.send({message: "API is running"})
    })

}
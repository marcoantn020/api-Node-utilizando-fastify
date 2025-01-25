import {ContactUseCase} from "../usecases/contact.usecase";
import {FastifyInstance} from "fastify";
import {ContactInterface, CreateContact} from "../interfaces/contact.interface";
import {simpleAuthMiddleware} from "../middleware/simple.auth.middleware";

export async function contactRoutes(fastify: FastifyInstance) {
    const contactUseCase = new ContactUseCase();
    fastify.addHook('preHandler', simpleAuthMiddleware)

    fastify.post<{ Body: CreateContact }>('/', async (req, reply) => {
        const {name, email, phone} = req.body
        const userEmail = req.headers['email']

        try {
            const data = await contactUseCase.create({
                name,
                email,
                phone,
                userEmail
            })
            return reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })

    fastify.get('/', async (req, reply) => {
        const emailUser = req.headers['email']
        try {
            const data = await contactUseCase.listAllContacts(emailUser)
            return reply.send(data);
        } catch (error) {
            reply.send(error)
        }
    })

    fastify.put<{ Body: ContactInterface, Params: { id: string } }>('/:id', async (req, reply) => {
        const {id} = req.params
        const {name, email, phone} = req.body
        try {
            const data = await contactUseCase.update({id, phone, name, email})
            return reply.send(data);
        } catch (error) {
            reply.send(error)
        }
    })

    fastify.delete<{Params: { id: string }}>('/:id', async (req, reply) => {
        const {id} = req.params
        try {
            const data = await contactUseCase.delete(id)
            return reply.send(data);
        } catch (error) {
            reply.send(error)
        }
    })
}
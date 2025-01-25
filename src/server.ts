import fastify, {FastifyInstance} from "fastify";
import {userRoutes} from "./routes/user.routes";
import {contactRoutes} from "./routes/contact.routes";

const app: FastifyInstance = fastify({
    logger: false
})

app.register(userRoutes, {
    prefix: "/users"
})

app.register(contactRoutes, {
    prefix: '/contacts'
})

app.listen(
    {port: 3000},
    () => console.log("Server is running on port 3000")
)
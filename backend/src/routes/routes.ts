import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateItemController } from '../controllers/createItemController';
import { GetItensController } from '../controllers/getItensController';
import { GetItemController } from '../controllers/getItemController';


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.get("/skins", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetItensController().handle(request, reply)
    })

    fastify.get("/skin", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetItemController().handle(request, reply)
    })

    fastify.post("/skin", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateItemController().handle(request, reply)
    })
}
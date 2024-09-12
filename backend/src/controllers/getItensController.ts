import { FastifyRequest, FastifyReply } from 'fastify';
import { GetItensService } from '../services/getItensService';
import prismaClient from '../client';


class GetItensController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const getItensService = new GetItensService()
        const itens = await getItensService.execute();
        reply.send(itens)
    }
}

export { GetItensController }
import { FastifyRequest, FastifyReply } from 'fastify';
import { GetItemService } from '../services/getItemService';
import prismaClient from '../client';


class GetItemController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const queryParams = request.query as any;
        const getItemService = new GetItemService();

        // Passa os filtros para o serviço
        const items = await getItemService.execute(queryParams);

        // Envia a lista de itens filtrados
        return reply.send(items);
    }
}

export { GetItemController }
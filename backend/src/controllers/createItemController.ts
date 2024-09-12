import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateItemService } from '../services/createItemService';

interface ItemI {
    id?: string;
    name: string;
    image: string;
    category: string;
    rarity: string;
    float: string;
    price: number
    createdAt?: Date | string;
    updateAt?: Date | string;
}

class CreateItemController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const itemBody = request.body as ItemI
        const itemService = new CreateItemService()
        const item = await itemService.execute(itemBody);
        reply.send(item)
    }
}

export { CreateItemController }
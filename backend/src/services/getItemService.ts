import prismaClient from "../client";

interface ItemI {
    id?: string;
    name?: string; 
    image?: string;
    category?: string;
    float?: string;
    min?: number;
    max?: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
}

class GetItemService {
    async execute(params: Partial<ItemI>) {
        const { name, category, min, max, float, } = params;

        const whereClause: any = {};

        if (name) {
            whereClause.name = {
                contains: String(name),
                mode: 'insensitive', 
            };
        }
            if (category) {
                whereClause.category = String(category);
            }
            if (params.min !== undefined && params.max !== undefined) {
                whereClause.price = {
                    gte: Number(params.min),  // Maior ou igual ao preço mínimo
                    lte: Number(params.max),  // Menor ou igual ao preço máximo
                };
            } else if (params.min !== undefined) {
                whereClause.price = {
                    gte: Number(params.min),  // Maior ou igual ao preço mínimo
                };
            } else if (params.max !== undefined) {
                whereClause.price = {
                    lte: Number(params.max),  // Menor ou igual ao preço máximo
                };
            }

        if (float) {
            const floatValue = parseFloat(float);  // Converte a string para número flutuante
    
            // Use o valor convertido na comparação
            whereClause.float = {
                gte: floatValue.toString(),  // Converte o número flutuante de volta para string para compatibilidade
            };
        }

        const itens = await prismaClient.item.findMany({
            where: whereClause,
        });

        return itens;
    }
}

export { GetItemService };
import prismaClient from "../client";


interface ItemI {
    id?: string;
    name: string;
    image: string;
    category: string;
    float: string;
    price: number
    createdAt?: Date | string;
    updateAt?: Date | string;
}



class GetItensService {
    async execute() {
        
        const itens = await prismaClient.item.findMany()
        return itens
    }
}


export  { GetItensService}
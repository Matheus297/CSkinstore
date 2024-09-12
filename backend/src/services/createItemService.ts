import prismaClient from "../client";


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



class CreateItemService {
    async execute(item: ItemI) {
        
        const itemData = await prismaClient.item.create({
            data: item
        })

        return itemData
    }
}


export  { CreateItemService}
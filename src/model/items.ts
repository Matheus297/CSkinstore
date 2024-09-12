export interface ItemI {
    id?: string;
    name: string;
    image: string;
    category: string;
    rarity?: string | any;
    float: string;
    price: number
    createdAt?: Date | string;
    updateAt?: Date | string;
}
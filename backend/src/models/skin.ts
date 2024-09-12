interface SkinI {
    id?: string;
    name: string;
    image: string;
    category: string;
    float: number;
    price: number
    createdAt?: Date | string;
    updateAt?: Date | string;
}
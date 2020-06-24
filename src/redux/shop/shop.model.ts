export type ShopItem = {
    id?: number | undefined;
    name?: string | undefined;
    imageUrl?: string | undefined;
    price?: number | undefined;
};
export type ShopCollection = {
    id?: number;
    title: string;
    routeName: string;
    items: ShopItem[]
}
export type Shop = {
    Categoria: ShopCollection[]
}
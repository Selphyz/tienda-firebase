export type ShopItem = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
};
export type ShopCategory = {
    id: number;
    title: string;
    routeName: string;
    items: ShopItem[]
}
export type Shop = {
    collections?: ShopCategory[]
}
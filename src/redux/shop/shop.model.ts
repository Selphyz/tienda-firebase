export type ShopStateItem = {
    id?: number | undefined;
    name?: string | undefined;
    imageUrl?: string | undefined;
    price?: number | undefined;
};
export type ShopStateCollection = {
    id?: number;
    title: string;
    routeName: string;
    items: (ShopStateItem)[] | null
}
export interface Collections {
    hats: ShopStateCollection;
    sneakers: ShopStateCollection;
    jackets: ShopStateCollection;
    womens: ShopStateCollection;
    mens: ShopStateCollection;
}
export interface ShopStateModel {
    collections: Collections
}

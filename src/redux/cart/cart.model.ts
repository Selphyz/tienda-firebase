export interface CartStateModel {
    hidden: boolean;
    cartItems?: (CartStateItems)[] | null;
}
export interface CartStateItems {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

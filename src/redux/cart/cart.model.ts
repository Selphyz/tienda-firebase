export interface CartStateModel {
    hidden: boolean;
    cartItems?: (CartStateItem)[] | null;
}
export interface CartStateItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

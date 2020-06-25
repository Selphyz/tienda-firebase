import { UserStateModel } from "./user/user.model";
import { CartStateModel } from "./cart/cart.model";
import { DirectoryStateModel } from "./directory/directory.model";
import { ShopStateModel } from "./shop/shop.model";

export interface State {
    user: UserStateModel;
    cart: CartStateModel;
    directory: DirectoryStateModel;
    shop: ShopStateModel
}
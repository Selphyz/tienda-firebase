import SHOP_DATA from "./shop.data";
import { ShopStateModel } from "./shop.model";
import { UserActionTypes } from "../user/user.types";

const INITIAL_STATE = SHOP_DATA;
const shopReducer = (state: ShopStateModel = INITIAL_STATE, action: { type: UserActionTypes; }) => {
    switch (action.type) {
        default:
            return state
    }
}
export default shopReducer;
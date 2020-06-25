import SHOP_DATA from "./shop.data";
import { ShopStateModel } from "./shop.model";
import ShopActionTypes from './shop.types';

const INITIAL_STATE = SHOP_DATA;
const shopReducer = (state: ShopStateModel = INITIAL_STATE, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.payload
            };
        default:
            return state
    }
}
export default shopReducer;
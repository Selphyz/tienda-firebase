import { createSelector } from "reselect";
const selectShop = (state: { shop: any; }) => state.shop;
export const selectCollections = createSelector(
    [selectShop], shop => shop.collections
)
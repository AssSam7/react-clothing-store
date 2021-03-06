import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) => {
  console.log("URL Param: " + collectionUrlParam);
  return createSelector([selectShopCollection], (collections) =>
    collections.find(
      (collection) =>
        collection.title.toLowerCase() === collectionUrlParam.toLowerCase()
    )
  );
};

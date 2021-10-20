import { createSelector } from "reselect";


const selectShop = state => state.shop;

// select all collections 
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections =>Object.keys(collections).map(key=>collections[key])
)

// select only one collectoin 
 export const selectCollection = collectionUrlParams => 
    createSelector(
        [selectCollections],
        collections =>collections[collectionUrlParams]
    );



// selectCollection(ownProps.match.params.collectionId)(state)
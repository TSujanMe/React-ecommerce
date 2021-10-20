import cartActionTypes from "./card.types"

export const toogleCardHiddle = ( )=>{
    return {
        type:cartActionTypes.TOOGLE_CART_HIDDEN
    }
};


export const addItem = (item )=>{
    return {
        type:cartActionTypes.ADD_ITEMS,
        payload:item
    };
};
export const removeItem = (item )=>{
    return {
        type:cartActionTypes.REMOVE_ITEM,
        payload:item
    };
};

export const cleatItemFromCart = (item)=>{
    return {
        type:cartActionTypes.CLEAR_ITEM_FROM_CART,
        payload:item

    }
}
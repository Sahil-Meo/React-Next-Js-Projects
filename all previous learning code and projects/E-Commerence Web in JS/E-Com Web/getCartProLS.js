import { updateCartValue } from "./updateCartValue.js";

export const getCartProductsfromLS = ()=>{
    let cartProducts = localStorage.getItem("cartProLS");
    if(!cartProducts){
        return []
    }
    cartProducts = JSON.parse(cartProducts);

    updateCartValue(cartProducts);

    return cartProducts;

}
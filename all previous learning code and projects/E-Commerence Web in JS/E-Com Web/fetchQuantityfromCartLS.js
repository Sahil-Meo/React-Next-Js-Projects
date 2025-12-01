import { getCartProductfromLS } from "./getCartProductfromLS.js";

export const fetchQuantityfromCartLS = (id, price) => {

    let cartProducts = getCartProductfromLS();

    let existingProduct = cartProducts.find((curPro) => curPro.id === id);

    let quantity = 1;

    if(existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return{quantity, price}
}
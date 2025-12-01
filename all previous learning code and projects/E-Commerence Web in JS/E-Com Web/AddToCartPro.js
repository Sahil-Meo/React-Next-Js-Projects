import { getCartProductsfromLS } from "./getCartProLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";
getCartProductsfromLS();
export const addToCartPro = (event, id, stock) => {
    let cartProLS = getCartProductsfromLS();
    let currentProElem = document.getElementById(`card${id}`);
    let quantity = currentProElem.querySelector(".productQuantity").innerText;
    let price = currentProElem.querySelector(".productPrice").innerText;
    price = price.replace("Rs", "").trim()
    let existingProduct = cartProLS.find((curpro) => curpro.id === id);

    if(existingProduct && quantity > 1){

        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number((price * quantity).toFixed(2));
        
        let updatedCart= { id, quantity, price };

        updatedCart = cartProLS.map((curpro)=>{
            return curpro.id===id? updatedCart : curpro;
        });

        localStorage.setItem("cartProLS", JSON.stringify(updatedCart));
       
    }
    price = price * quantity;
    quantity = Number(quantity)
    cartProLS.push({ id,price,quantity });
    localStorage.setItem("cartProLS", JSON.stringify(cartProLS));
    updateCartValue(cartProLS);

    showToast();
}

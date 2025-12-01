import { getCartProductsfromLS } from "./getCartProLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

let cartProLS = getCartProductsfromLS();

fetch('./products.json')
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error to load: ${res.status}`)
        }

        return res.json();
    })
    .then(data => {
        let filteredProducts = data.filter((curPro) => {
            return cartProLS.some((curElem) => curElem.id === curPro.id);
        })

        showCartProducts(filteredProducts);
    });

fetch('https://fakestoreapi.com/products').then((res) => res.json()).then(data => {
    let filteredProducts = data.filter((curPro) => {
        return cartProLS.some((curElem) => curElem.id === curPro.id);
    })
    showCartProducts(filteredProducts);

});

const cartElement = document.getElementById("productCartContainer");
const TemplateContainer = document.getElementById("productCartTemplate");

const showCartProducts = (filteredProducts) => {
    filteredProducts.forEach(element => {
        const { id, name, image, category, price, stock } = element;

        let productClone = document.importNode(TemplateContainer.content, true);

        let cartProLS = fetchQuantityfromCartLS(id, price); // take this from ls

        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`)
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".cartproductImage").src = image;
        productClone.querySelector(".cartproductImage").alt = name;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productPrice").textContent = cartProLS.price;
        productClone.querySelector(".productQuantity").textContent = cartProLS.quantity;

        productClone.querySelector(".remove-to-cart-button").addEventListener('click', () => {
            removeProductFromCart(id);
        });

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            incrementDecrement(event, id, stock, price);
        })

        cartElement.append(productClone);
    });
}


// to fetch price and quantity to ls

const fetchQuantityfromCartLS = (id, price) => {
    let cartProLS = getCartProductsfromLS();
    let existingProduct = cartProLS.find((curPro) => curPro.id === id);
    let quantity;
    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return { price, quantity };
}

// to remove product from cart

const removeProductFromCart = (id) => {
    let cartProLS = getCartProductsfromLS();
    let cartProducts = cartProLS.filter((curPro) => curPro.id !== id);
    localStorage.setItem("cartProLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
    }

    updateCartValue(cartProducts);
    showToast();
    UpdateCartProductTotal();
}

// to inc & dec the quantity

const incrementDecrement = (event, id, stock, price) => {

    const currentCardElement = document.querySelector(`#card${id}`);
    const pq = currentCardElement.querySelector(".productQuantity");
    const pr = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let lsPrice = 0;

    const cartProductLS = getCartProductsfromLS();

    let existingProduct = cartProductLS.find((curPro) => curPro.id === id);
    if (existingProduct) {
        quantity = existingProduct.quantity;
        console.log(quantity)
        lsPrice = existingProduct.price;
    }

    if (event.target.classList.contains("cartIncrement")) {
        if (quantity < stock) {
            quantity += 1;
        }
        else {
            quantity = stock;
            lsPrice = price * stock;
        }
    }

    if (event.target.classList.contains("cartDecrement")) {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    console.log(quantity)
    lsPrice = price * Number(quantity);
    lsPrice = Number(lsPrice.toFixed(2))
    let updatedCart = cartProductLS.map((curPro) =>
        curPro.id === id ? { id, price: lsPrice, quantity } : curPro
    )
    console.log(updatedCart)

    localStorage.setItem("cartProLS", JSON.stringify(updatedCart));
    pq.textContent = quantity;
    pr.textContent = lsPrice;

    UpdateCartProductTotal();

}

// to total amount

const UpdateCartProductTotal = () => {

    let prodcutSubTotal = document.querySelector(".prodcutSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");


    let lsCartProduct = getCartProductsfromLS();
    let initialValue = 0;
    let totalProductPrice = lsCartProduct.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, initialValue);

    prodcutSubTotal.textContent = `Rs ${totalProductPrice}`;
    productFinalTotal.textContent = `Rs ${totalProductPrice + 50}`
}

UpdateCartProductTotal();










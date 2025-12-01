import { addToCartPro } from "./AddToCartPro.js";

document.addEventListener("DOMContentLoaded", () => {

    const api2 = fetch('https://fakestoreapi.com/products').then((res) => res.json());

    const normalizeAPI2 = (product) => {
        return {
            id: product.id,
            name: product.title || "Unknown product",
            category: product.category || "Miscellaneous",
            description: product.description || "No Description available",
            brand: "No Brand",
            image: product.image || "https://via.placeholder.com/150",
            price: product.price || 0,
            stock: product.price || Number(20),
        };
    };

    Promise.all([api2])
        .then(([data2]) => {
            const normalizedData = [...data2.map(normalizeAPI2)];
            showProductContainer(normalizedData);
        })
        .catch((err) => {
            console.error("Error fetching product data", err);
            productContainer.innerHTML = "<p>Failed to load products. Please try again later.</p>";
        });

    const productContainer = document.getElementById("productContainer");
    const productTemplate = document.getElementById("productTemplate");


    const showProductContainer = (products) => {
        if (!products || products.length === 0) {
            productContainer.innerHTML = "<p>No products available at the moment.</p>";
            return;
        }

        productContainer.innerHTML = "";
        products.forEach((curPro) => {
            const { category, description, name, brand, id, stock, image, price } = curPro;
            const productClone = document.importNode(productTemplate.content, true);

            productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
            productClone.querySelector(".category").textContent = category;
            productClone.querySelector(".productImage").src = image;
            productClone.querySelector(".productImage").alt = name;
            productClone.querySelector(".productStock").textContent = stock;
            productClone.querySelector(".productPrice").textContent = `Rs ${price}`;
            productClone.querySelector(".productActualPrice").textContent = `Rs ${price * 2}`;

            // Shorten and toggle product name
            const productNameElement = productClone.querySelector(".productName");
            setupReadMoreToggle(productNameElement, name, 5, "words");

            // Shorten and toggle product description
            const productDescriptionElement = productClone.querySelector(".productDescription");
            setupReadMoreToggle(productDescriptionElement, description, 20, "words");

            productClone.querySelector(".stockElement").addEventListener("click", (event) => {
                homeQuantityToggle(event, id, stock);
            });
            productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
                addToCartPro(event, id, stock);
            });

            productContainer.append(productClone);
        });
    };

    /**
     * Function to set up "Read More" functionality.
     * @param {HTMLElement} element - The element to toggle text for.
     * @param {string} fullText - The full text to display.
     * @param {number} limit - The word or line limit before truncating.
     * @param {"words" | "lines"} mode - Whether to limit by words or lines.
     */
    const setupReadMoreToggle = (element, fullText, limit, mode) => {
        let truncatedText = fullText;

        // Truncate text based on mode
        if (mode === "words") {
            const words = fullText.split(" ");
            if (words.length > limit) {
                truncatedText = words.slice(0, limit).join(" ") + "...";
            }
        }

        // Set truncated text
        element.textContent = truncatedText;

        // Add "Read More" link if text is truncated
        if (truncatedText !== fullText) {
            const readMoreLink = document.createElement("span");
            readMoreLink.textContent = " Read More";
            readMoreLink.style.color = "#d33f3f";
            readMoreLink.style.cursor = "pointer";
            readMoreLink.style.fontSize = "16px"
            readMoreLink.classList.add("read-more");

            readMoreLink.addEventListener("click", () => {
                if (element.textContent.includes("...")) {
                    element.textContent = fullText;
                    readMoreLink.textContent = " Read Less";
                } else {
                    element.textContent = truncatedText;
                    readMoreLink.textContent = " Read More";
                }

                // Reattach the read-more link
                element.appendChild(readMoreLink);
            });

            element.appendChild(readMoreLink);
        }
    };


});


const homeQuantityToggle = (event, id, stock) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.classList.contains("cartIncrement") && quantity < stock) {
        quantity += 1;
    }
    if (event.target.classList.contains("cartDecrement") && quantity > 1) {
        quantity -= 1;
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity", quantity);
};

// Signup popup logic 
const openPopupButton = document.getElementById("sign-in-up");
const signupPopup = document.getElementById("signup-popup");
const closePopup = document.getElementById("close-popup");

openPopupButton.addEventListener("click", () => {
    signupPopup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    signupPopup.style.display = "none";
});

signupPopup.addEventListener("click", (event) => {
    if (event.target === signupPopup) {
        signupPopup.style.display = "none";
    }
});


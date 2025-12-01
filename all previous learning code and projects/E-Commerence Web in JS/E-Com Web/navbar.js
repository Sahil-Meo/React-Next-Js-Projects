const Navbar = `<div class="container header">
         <div class="navbar-brand">
            <a href="index.html">
               <img src="images/logo2.png" alt="logo-img" id="logo" />
            </a>
         </div>
         <nav class="navbar">
            <ul>
               <li class="nav-item">
                  <a href="/" class="nav-link">Home</a>
               </li>
               <li class="nav-item">
                  <a href="About.html" class="nav-link">About</a>
               </li>
               <li class="nav-item">
                  <a href="Products.html" class="nav-link">Products</a>
               </li>
               <li class="nav-item">
                  <a href="Contact.html" class="nav-link">Contact</a>
               </li>
               <li class="nav-item">
                  <a href="cartProduct.html" class="nav-link cart-button" id="cartValue"><i
                        class="fa-solid fa-cart-shopping"> 0 </i></a>
               </li>
            </ul>
         </nav>
      </div>`

      const navElem = document.getElementById("navSection");
      navElem.insertAdjacentHTML("afterbegin", Navbar);
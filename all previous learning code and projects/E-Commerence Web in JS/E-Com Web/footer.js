const footerHTML = ` <footer id="footer-section">
      <div class="container footer-main-div">
        <div class="first-box">
          <a href="#"><img src="images/logo.png" id="logo" alt="logo-img" /></a>
          <ul class="store-links">
            <li>
              <a href="#"
                ><i class="fa-solid fa-location-dot"></i> Pakistan, Punjab,
                Vehari</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa-solid fa-phone"></i> Call: +923265141541</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa-regular fa-user"></i> Company Number: 5477349
              </a>
            </li>
            <li class="social-icons">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-tiktok"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </li>
          </ul>
        </div>

        <div class="CS-div">
          <h4 class="heading-h4">Customer Service</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Refund and Return policy</a></li>
            <li><a href="#">Money Back Guarantee</a></li>
            <li><a href="#">Money back Guarantee</a></li>
            <li><a href="#">Delivery policy</a></li>
          </ul>
        </div>

        <div class="Guaid-div">
          <h4 class="heading-h4">Guaidence</h4>
          <ul>
            <li><a href="#"> online suport </a></li>
            <li><a href="#"> contact us </a></li>
            <li><a href="#"> 24/7 report </a></li>
            <li><a href="#"> Shipping Services </a></li>
            <li><a href="#"> Delivery time </a></li>
          </ul>
        </div>

        <div class="news-div">
          <h4 class="heading-h4">NEWSLETTER SIGNUP</h4>
          <p class="news-paragraph">
            subscribe to our newsletter and get 10% off! on first purchase
          </p>
          <div class="newsletter-box">
            <input
              type="text"
              name="Gmail"
              id="signup"
              placeholder="Enter yor email"
            />
            <button class="news-Btn">signup</button>
          </div>
          <img src="images/cards-img.png" alt="card-images" />
        </div>
      </div>
      <hr style="border: 1px solid hsl(0, 0%, 30%)" />
      <p class="copy-right">
        <a href="#">All Rights Reserved © 2024 Shop&Save store</a>
      </p>
    </footer>`;

    const footerElem = document.querySelector("#footer-section");
    footerElem.insertAdjacentHTML("afterbegin", footerHTML); 
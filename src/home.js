import { useEffect, useState } from "react";
import cartImg from "./cart.png";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/a.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <section className="header">
        <h1 className="title">EduShop</h1>
        <input
          className="searchInput"
          type="text"
          placeholder="Search products..."
        />
        <button className="btn login">Login</button>
        <div className="cartBox">
          <img src={cartImg} className="cartIcon" alt="cart" />
          <span className="cartBadge">0</span>
        </div>
      </section>
      <section className="hero">
        <div className="heroLeft">
          <div className="heroTrust">
            <span className="heroStars">★★★★★</span>
            <span className="heroTrustText">Trusted by 50,000+ customers</span>
          </div>

          <h1 className="heroTitle">
            Shop Smarter, <span className="heroLB">Live Better</span>
          </h1>

          <p className="heroDesc">
            Discover premium electronics and gadgets at unbeatable prices.
            Experience quality, innovation, and style with every purchase.
          </p>

          <div className="heroBtns">
            <button className="heroBtnPrimary">Explore Products</button>
            <button className="heroBtnOutline">Join 50K+ Customers</button>
          </div>

          <div className="heroStats">
            <div className="statBox">
              <h3>1000+</h3>
              <p>Products</p>
            </div>

            <div className="statBox">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="statBox">
              <h3>4.8/5</h3>
              <p>Rating</p>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="heroCard">
            <div className="heroCardIcon">👜</div>
            <h2>Premium Quality</h2>
            <p>Curated collection of the best products</p>
          </div>
        </div>
      </section>

      <section className="trustedBrands">
        <h2 className="trustedTitle">
          Trusted by <span>100+ Brands</span>
        </h2>

        <p className="trustedDesc">
          Join thousands of satisfied customers who trust us for quality
          products and exceptional service.
        </p>

        <div className="trustedGrid">
          <div className="trustedCard">
            <div className="trustedIcon">🛡️</div>
            <h3>Secure Payments</h3>
            <p>100% secure transactions</p>
          </div>

          <div className="trustedCard">
            <div className="trustedIcon">🏆</div>
            <h3>Premium Quality</h3>
            <p>Only authentic products</p>
          </div>

          <div className="trustedCard">
            <div className="trustedIcon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Same day delivery available</p>
          </div>

          <div className="trustedCard">
            <div className="trustedIcon">👥</div>
            <h3>Trusted by 50K+</h3>
            <p>Happy customers worldwide</p>
          </div>
        </div>
      </section>

      <section className="productsSection">
        <div className="productsHead">
          <h2>Featured Products</h2>
        </div>

        <div className="productsGrid">
          {products.map((item) => (
            <div className="productCard" key={item.id}>
              <div className="productImgBox">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="productInfo">
                <div className="productTopRow">
                  <span className="productTag">{item.category}</span>
                  <span className="productRating">⭐ {item.rating}</span>
                </div>

                <h3 className="productTitle">{item.name}</h3>

                <p className="productDesc">{item.description}</p>

                <p className="productPrice">₹{item.price}</p>

                <button className="addCartBtn">🛒 Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaTopPill">
          ⭐ <span>Join 50,000+ Happy Customers</span>
        </div>

        <h1 className="ctaTitle">
          Your Favorite Products Are{" "}
          <span className="ctaGrad">Just a Click Away</span>
        </h1>

        <p className="ctaDesc">
          Don't miss out on amazing deals and premium quality products. Start
          your shopping journey today and experience the difference.
        </p>

        <div className="ctaBtns">
          <button className="ctaBtnPrimary">Browse All Products →</button>
          <button className="ctaBtnSecondary">Contact Support</button>
        </div>

        <div className="ctaLine"></div>

        <div className="ctaStats">
          <div className="ctaStat">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>

          <div className="ctaStat">
            <h3>30 Days</h3>
            <p>Return Policy</p>
          </div>

          <div className="ctaStat">
            <h3>Free</h3>
            <p>Shipping ₹999+</p>
          </div>

          <div className="ctaStat">
            <h3>100%</h3>
            <p>Secure Payments</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

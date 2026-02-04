const ProductPage = () => {
  return (
    <div className="page productPage">
      <div className="backRow">← Back to Products</div>

      <div className="productLayout">
        
        <div className="productLeft">
          <div className="productBigImgBox">
            <img
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
              alt="product"
            />
          </div>
        </div>

        <div className="productRight">
          <span className="productChip">Smartphones</span>

          <h1 className="productName">iPhone 15 Pro</h1>

          <div className="productRatingRow">
            <span className="ratingStars">★★★★☆</span>
            <span className="ratingText">4.9 (251 reviews)</span>
          </div>

          <h2 className="productBigPrice">₹134900</h2>

          <p className="productSmallDesc">
            iPhone 15 Pro with titanium design and advanced camera system
          </p>

          <p className="inStock">In Stock</p>

          <span className="addedBadge">Added in Cart</span>

          <button className="goCartBtn">🛒 Go to Cart</button>

          <div className="featuresBox">
            <h3>Product Features</h3>
            <ul>
              <li>Premium build quality and design</li>
              <li>Advanced technology and performance</li>
              <li>Comprehensive warranty coverage</li>
              <li>Fast and reliable customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

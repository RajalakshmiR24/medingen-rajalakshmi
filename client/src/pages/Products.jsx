import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/commonSlice";
import Disclaimer from "./dummydata/Disclaimer";
import RatingReview from "./dummydata/RatingReview";
import FAQ from "./dummydata/FAQ";
import tabletImage from "../assets/tablet.jpg";
import "./styles/Products.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.common);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const detailRef = useRef(null);

  useEffect(() => {
    dispatch(getData({ endpoint: "/products" }));
  }, [dispatch]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);

    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleAddClick = () => {
    navigate("/add-products");
  };

  const averageRating = (product) => {
    if (product.reviews && product.reviews.length > 0) {
      const totalStars = product.reviews.reduce((acc, review) => acc + review.star, 0);
      return totalStars / product.reviews.length;
    }
    return 0; // Return 0 if there are no reviews
  };

  const getGenericAlternatives = (genericName) =>
    data.filter((p) => p.generic_name === genericName);

  return (
    <div className="products-container">
      {selectedProduct && (
        <div className="comparison-section" ref={detailRef}>
          <div className="description-section">
            <div className="description-header">
              <span className="back-arrow">←</span>
              <span className="med-name">
                {selectedProduct.name}/{selectedProduct.generic_name}
              </span>
            </div>

            <div className="description-card">
              <div className="card-header">Medicine Details</div>
              <div className="card-body">
                <p>
                  <strong>About:</strong> {selectedProduct.description?.about}
                </p>
                <p>
                  <strong>How it works:</strong>{" "}
                  {selectedProduct.description?.how_it_works}
                </p>
                <p>
                  <strong>Usage:</strong> {selectedProduct.description?.usage_info}
                </p>
                <p>
                  <strong>Side effects:</strong>{" "}
                  {selectedProduct.description?.side_effects}
                </p>
              </div>
            </div>
          </div>

          <div className="generic-alternative">
            <h3>Generic Medicine Alternative</h3>
            {getGenericAlternatives(selectedProduct.generic_name).map((item) => (
              <div key={item.id} className="alt-card">
                <img src={tabletImage} alt="Tablet" />
                <div className="alt-info">
                  <p>{item.name}</p>
                  <p>{item.generic_name}</p>
                  <p>Rs. {item.price}</p>
                  <p className="discount">15% less price</p>
                </div>
                <button className="add-btn" onClick={handleAddClick}>
                  + Add
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && <p className="loading-text">Loading products...</p>}
      {error && (
        <p className="error-text">
          {/* Check if error is an object and display message or code */}
          {error.message || error.code || "An error occurred."}
        </p>
      )}
      <h2 className="products-title">Compare medicine</h2>
      <p className="products-subtitle">
        Compare medicines price composition to make your decision
      </p>
      <div className="product-grid">
        {data && data.length > 0 ? (
          data.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img src={tabletImage} alt="Tablet" className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-company">By {product.category}</p>
              <p>
                <strong>Generic Name:</strong> {product.generic_name}
              </p>
              <p>
                <strong>Avg Price:</strong> Rs {product.average_price}
              </p>
              <div className="price-section">
                <span className="price-discount">15% Off</span>
                <span className="price-amount">Rs. {product.price}</span>
              </div>
              <div className="product-chem">
                <p>
                  <strong>Chemical formation:</strong>
                </p>
                <p className="chem-value">{product.chemical_formation}</p>
              </div>

              <div className="product-reviews">
                <p>
                  <strong>Ratings & Review</strong>
                </p>
                <div className="stars">
                  {product.reviews && product.reviews.length > 0
                    ? `${'★'.repeat(Math.round(averageRating(product)))}☆${'☆'.repeat(5 - Math.round(averageRating(product)))}` 
                    : 'No rating yet'}
                  <span className="rating-score">{averageRating(product).toFixed(1)}</span>
                </div>
                <ul>
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                      <li key={index} className="review-item">
                        <div>
                          <span className="review-star">★ {review.star} stars</span>
                        </div>
                        <div>“{review.content}”</div>
                      </li>
                    ))
                  ) : (
                    <li className="review-item">No reviews available.</li>
                  )}
                </ul>
              </div>
            </div>
          ))
        ) : !loading ? (
          <p>No products found.</p>
        ) : null}
      </div>

      <FAQ />
      <RatingReview />
      <Disclaimer />
    </div>
  );
};

export default Products;

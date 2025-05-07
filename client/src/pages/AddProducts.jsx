import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../redux/commonSlice";
import FormComponent from "../components/FormComponent";
import "./styles/AddProducts.css";

const AddProducts = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.common);

  const [formData, setFormData] = useState({});
  const [reviews, setReviews] = useState([{ summary: "", content: "", star: 5 }]);

  const handleReviewChange = (index, field, value) => {
    const updatedReviews = [...reviews];
    updatedReviews[index][field] = field === "star" ? Number(value) : value;
    setReviews(updatedReviews);
  };

  const addReview = () => {
    setReviews([...reviews, { summary: "", content: "", star: 5 }]);
  };

  const removeReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  const handleSubmit = (data) => {
    const finalData = { ...data, reviews };
    dispatch(postData({ endpoint: "/products", data: finalData }));
  };

  useEffect(() => {
    if (success) {
      resetFormFields();
    }
  }, [success]);

  const resetFormFields = () => {
    setFormData({});
    setReviews([{ summary: "", content: "", star: 5 }]);
  };

  const fields = [
    { name: "name", label: "Product Name", type: "text", placeholder: "Enter product name", required: true },
    { name: "category", label: "Category", type: "text", placeholder: "Enter category", required: true },
    { name: "generic_name", label: "Generic Name", type: "text", placeholder: "Enter generic name", required: true },
    { name: "average_price", label: "Average Price", type: "number", placeholder: "Enter average price", required: true },
    { name: "price", label: "Current Price", type: "number", placeholder: "Enter price", required: true },
    { name: "chemical_formation", label: "Chemical Formation", type: "text", placeholder: "Enter chemical formula", required: true },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter description", required: true },
    { name: "about", label: "About", type: "textarea", placeholder: "Enter about info", required: true },
    { name: "usage_info", label: "Usage Info", type: "textarea", placeholder: "Enter usage info", required: true },
    { name: "how_it_works", label: "How It Works", type: "textarea", placeholder: "Explain how it works", required: true },
    { name: "side_effects", label: "Side Effects", type: "textarea", placeholder: "Enter side effects", required: true },
    { name: "salt_content", label: "Salt Content (mg)", type: "number", placeholder: "Enter salt content", required: true },
  ];

  return (
    <div className="product-page">
      <div className="product-left">
        <FormComponent
          title="Add Product"
          fields={fields}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          buttonText="Submit"
        />
      </div>

      <div className="product-right">
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="mb-2">
                <label className="block text-sm font-medium">Summary</label>
                <input
                  type="text"
                  value={review.summary}
                  onChange={(e) => handleReviewChange(index, "summary", e.target.value)}
                  className="input-field"
                  placeholder="Enter summary"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Content</label>
                <textarea
                  value={review.content}
                  onChange={(e) => handleReviewChange(index, "content", e.target.value)}
                  className="input-field"
                  placeholder="Enter review content"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Star Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={review.star}
                  onChange={(e) => handleReviewChange(index, "star", e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <button
                type="button"
                onClick={() => removeReview(index)}
                className="remove-btn"
              >
                Remove Review
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addReview}
            className="add-review-btn"
          >
            Add Another Review
          </button>
        </div>

        {loading && <p className="loading-text">Submitting...</p>}
        {error && (
          <p className="error-text">
            {typeof error === "string" ? error : error.message || "An error occurred"}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddProducts;

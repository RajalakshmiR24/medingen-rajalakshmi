import React from 'react';
import '../styles/RatingReview.css';

const reviews = [
  { rating: 4, text: '“the medicine is good it is bit costly when compared with the exact generic medicine”' },
  { rating: 3, text: '“the medicine is good it is bit costly when compared with the exact generic medicine”' },
  { rating: 5, text: '“the medicine is good it is bit costly when compared with the exact generic medicine”' },
];

const RatingReview = () => {
  const renderStars = (count) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`star ${i < count ? 'filled' : ''}`}
          >
            ★
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="rating-review-container">
      <h2>Ratings &amp; Review</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review-block">
          <div className="stars-row">
            {renderStars(review.rating)}
            <span className="rating-badge">{review.rating.toFixed(1)}</span>
          </div>
          <p className="review-text">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingReview;

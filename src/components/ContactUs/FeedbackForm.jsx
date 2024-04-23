// FeedbackForm.js
import React, { useState } from 'react';
import './ContactUs.css';

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState({
    rating: '',
    additionalFeedback: '',
  });

  const handleRatingChange = (e) => {
    const { value } = e.target;
    setFeedbackData({ ...feedbackData, rating: value });
  };

  const handleAdditionalFeedbackChange = (e) => {
    const { value } = e.target;
    setFeedbackData({ ...feedbackData, additionalFeedback: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedbackData);
    // Here you can submit the feedback data to your backend or perform any other actions
    // Reset form after submission
    setFeedbackData({ rating: '', additionalFeedback: '' });
  };

  return (
    <div className="container">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="rating-container">
          <label htmlFor="rating">Rating:</label>
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            checked={feedbackData.rating === '5'}
            onChange={handleRatingChange}
          />
          <label className="star" htmlFor="star5">
            &#9733;
          </label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            checked={feedbackData.rating === '4'}
            onChange={handleRatingChange}
          />
          <label className="star" htmlFor="star4">
            &#9733;
          </label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            checked={feedbackData.rating === '3'}
            onChange={handleRatingChange}
          />
          <label className="star" htmlFor="star3">
            &#9733;
          </label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            checked={feedbackData.rating === '2'}
            onChange={handleRatingChange}
          />
          <label className="star" htmlFor="star2">
            &#9733;
          </label>
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            checked={feedbackData.rating === '1'}
            onChange={handleRatingChange}
          />
          <label className="star" htmlFor="star1">
            &#9733;
          </label>
        </div>
        <div>
          <label htmlFor="additionalFeedback">Additional Feedback:</label>
          <textarea
            id="additionalFeedback"
            name="additionalFeedback"
            value={feedbackData.additionalFeedback}
            onChange={handleAdditionalFeedbackChange}
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

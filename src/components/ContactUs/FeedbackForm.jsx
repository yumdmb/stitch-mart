import React, { useState } from "react";
import "./ContactUsForm.css";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:", feedback, rating);
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Any Feedback?</h2>
      <div className="form-group">
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rate Us:</label>
        <div className="rating-scale">
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="radio"
              id={`rating-${i + 1}`}
              name="rating"
              value={i + 1}
              checked={rating === i + 1}
              onChange={() => setRating(i + 1)}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <label key={i} htmlFor={`rating-${i + 1}`}>
              {i + 1}
            </label>
          ))}
        </div>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}
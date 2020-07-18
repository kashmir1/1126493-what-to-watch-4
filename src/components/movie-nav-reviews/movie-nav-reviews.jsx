import React from 'react';
import PropTypes from 'prop-types';
import MovieReview from "../movie-review/movie-review.jsx";
import {CustomPropTypes} from "../../types";

const MovieNavReviews = (props) => {
  const {reviews} = props;
  const halfReviews = Math.ceil(reviews.length / 2);
  const reviewsFirsColumn = reviews.slice(0, halfReviews);
  const reviewsSecondColumn = reviews.slice(halfReviews);

  return (<div>
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviewsFirsColumn.map((review) => (
          <MovieReview
            key={review.id}
            review={review}
          />
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {reviewsSecondColumn.map((review) => (
          <MovieReview
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </div>
  </div>);
};

export default MovieNavReviews;

MovieNavReviews.propTypes = {
  reviews: PropTypes.arrayOf(CustomPropTypes.REVIEW).isRequired,
};

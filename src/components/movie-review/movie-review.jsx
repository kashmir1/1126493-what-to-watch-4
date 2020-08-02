import React from 'react';
import {CustomPropTypes} from "../../types";

const getDateTime = (time) => {
  const date = new Date(time);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const MovieReview = (props) => {
  const {review} = props;

  return (<React.Fragment>
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review && review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review && review.author}</cite>
          <time className="review__date" dateTime={review && getDateTime(review.date)}>{review && review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review && review.rating}</div>
    </div>
  </React.Fragment>);
};

export default MovieReview;

MovieReview.propTypes = {
  review: CustomPropTypes.COMMENT,
};

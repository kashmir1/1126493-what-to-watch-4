import React from 'react';
import {CustomPropTypes} from "../../types";
import moment from "moment";


const MovieReview = (props) => {
  const {review} = props;

  return (<React.Fragment>
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review && review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review && review.user.name}</cite>
          <time className="review__date" dateTime={moment(review.date)}>
            {
              moment(review.date).format(`MMMM DD, YYYY`)
            }
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review && review.rating}</div>
    </div>
  </React.Fragment>);
};

MovieReview.propTypes = {
  review: CustomPropTypes.COMMENT,
};

export default MovieReview;

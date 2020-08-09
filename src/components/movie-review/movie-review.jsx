import React from 'react';
import {CustomPropTypes} from "../../types/types";
import moment from "moment";

const MovieReview = (props) => {
  const {comment} = props;

  return (<React.Fragment>
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment && comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment && comment.user.name}</cite>
          <time className="review__date" dateTime={moment(comment.date).format(`YYYY-MM-DD`)}>
            {
              moment(comment.date).format(`MMMM DD, YYYY`)
            }
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment && comment.rating}</div>
    </div>
  </React.Fragment>);
};

MovieReview.propTypes = {
  comment: CustomPropTypes.COMMENT,
};

export default MovieReview;

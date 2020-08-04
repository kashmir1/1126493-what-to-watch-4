import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus, Pages} from '../../const.js';
import {getCurrentPage} from '../../reducer/app/selectors.js';
import {CustomPropTypes} from "../../types";
import {getAuthStatus, getUserData} from '../../reducer/user/selector.js';


const Header = (props) => {
  const {authorizationStatus, currentPage, film, onSignInClick, user} = props;
  const linkOnMain = currentPage !== Pages.MAIN ? `/` : null;

  const isReview = currentPage === Pages.REVIEW ?
    <React.Fragment>
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="movie-page.html" className="breadcrumbs__link">{film.title}</a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>
    </React.Fragment> : ``;

  const isSignIn = authorizationStatus === AuthorizationStatus.AUTH ?
    <React.Fragment>
      <div className="user-block">
        <div className="user-block__avatar">
          <img src={user.avatarSrc} alt={user.name} width="63" height="63" />
        </div>
      </div>
    </React.Fragment> :
    <React.Fragment>
      <div className="user-block">
        <a href="/sign-in" className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            onSignInClick();
          }}
        >Sign in</a>
      </div>
    </React.Fragment>;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a href={linkOnMain} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {isReview}

      {isSignIn}
    </header>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  film: CustomPropTypes.FILM,
  onSignInClick: PropTypes.func,
  user: CustomPropTypes.USER,
};

const mapStateToProps = (state) => ({
  currentPage: getCurrentPage(state),
  authorizationStatus: getAuthStatus(state),
  user: getUserData(state),
});

export default connect(mapStateToProps)(Header);

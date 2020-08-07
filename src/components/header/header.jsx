import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {CustomPropTypes} from "../../types";
import {connect} from 'react-redux';

import {AuthorizationStatus, Pages} from '../../const.js';
import {getAuthStatus, getUserData} from '../../reducer/user/selectors.js';

const Header = (props) => {
  const {auth, film, user} = props;

  const isReview = film &&
    <React.Fragment>
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`${Pages.FILM}/${film.id}`} className="breadcrumbs__link">{film.title}</Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>;

  const isSignIn = auth.status === AuthorizationStatus.AUTH ?
    <React.Fragment>
      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={Pages.MY_LIST}>

            <img src={user.avatarSrc} alt={user.name} width="63" height="63" />
          </Link>
        </div>
      </div>
    </React.Fragment> :
    <React.Fragment>
      <div className="user-block">
        <Link to={Pages.SIGN_IN} className="user-block__link">Sign in</Link>
      </div>
    </React.Fragment>;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to={Pages.MAIN} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {isReview}

      {isSignIn}
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
  }).isRequired,
  film: CustomPropTypes.FILM,
  user: CustomPropTypes.USER,
};

const mapStateToProps = (state) => ({
  auth: getAuthStatus(state),
  user: getUserData(state),
});

export default connect(mapStateToProps)(Header);

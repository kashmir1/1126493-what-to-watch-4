import React from 'react';
import PropTypes from 'prop-types';

const MovieNavTabs = (prop) => {
  const {tabs, activeTab, onActiveTabChange} = prop;

  const navItems = Object.values(tabs);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {navItems.map((item) => (
          <li
            key={item}
            className={activeTab === item ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}
            onClick={(evt) => {
              evt.preventDefault();
              onActiveTabChange(item);
            }}
          >
            <a href="#" className="movie-nav__link">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MovieNavTabs;

MovieNavTabs.prototype = {
  tabs: PropTypes.shape({
    OVERVIEW: PropTypes.string.isRequired,
    DETAILS: PropTypes.string.isRequired,
    REVIEWS: PropTypes.string.isRequired,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
};

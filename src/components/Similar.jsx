import React from 'react';
import {Link} from 'react-router-dom';

const Similar = ({id, title, type, genre, image, year, text, ratings}) => {
  return (
    <div className="similar">
      <img className="similar__poster" alt="similar movie poster" src={image} />

      <div className="similar__overlay">
        <div className="similar__info-block">
          <Link className="similar__title" to={`/movies/${id}`}>{title}</Link>

          <p className="similar__genre">{genre}</p>
          <p className="similar__type">{type}, {year}</p>

          <p className="similar__text">{text}</p>

          <span className="movie__rating-bg">
            <p className="movie__rating">{ratings}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Similar;

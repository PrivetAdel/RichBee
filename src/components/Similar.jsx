import React from 'react';
import {Link} from 'react-router-dom';
import similar from '../assets/similar.png';

const Similar = ({id, title, image, year = ''}) => {
  return (
    <div className="similar">
      <Link className="similar__poster-block" to={`/movies/${id}`}>
        <img className="similar__poster" alt="similar movie poster" src={similar} />
      </Link>

      <div className="similar__info-block">
        <Link className="similar__title" to={`/movies/${id}`}>{title}</Link>

        <p className="similar__genre">Drama</p>
        <p className="similar__type">Movie, {year}</p>

        <p className="similar__text">Awards</p>

        <span className="movie__rating-bg">
          <p className="movie__rating">IMDb 8.8</p>
        </span>
      </div>
    </div>
  );
};

export default Similar;

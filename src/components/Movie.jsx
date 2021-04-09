import React from 'react';
import {Link} from 'react-router-dom';

const Movie = ({id, title, image, year = ''}) => {
  return (
    <div className="movie">
      <Link className="movie__poster-block" to={`/movies/${id}`}>
        <img className="movie__poster" alt="movie poster" src={image} />
      </Link>

      <div className="movie__info-block">
        <div className="movie__block--title">
          <Link className="movie__title" to={`/movies/${id}`}>{title}</Link>
          <span className="movie__rating-bg">
            <p className="movie__rating">IMDb 8.8</p>
          </span>
        </div>
        
        <div className="movie__block--info">
          <p className="movie__type">Movie</p>
          <p className="movie__genre">Drama</p>
          <p className="movie__year">{year}</p>
        </div>

        <div className="movie__block--awards">
          <p className="movie__awards">Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

import React from 'react';
import {Link} from 'react-router-dom';

const Movie = ({id, type, genre, title, image, year, ratings, awards}) => {
  return (
    <div className="movie">
      <Link className="movie__poster-block" to={`/movies/${id}`}>
        <img className="movie__poster" alt="movie poster" src={image} />
      </Link>

      <div className="movie__info-block">
        <div className="movie__block--title">
          <Link className="movie__title" to={`/movies/${id}`}>{title}</Link>
          <span className="movie__rating-bg">
            <p className="movie__rating">{ratings}</p>
          </span>
        </div>
        
        <div className="movie__block--info">
          <p className="movie__type">{type}</p>
          <p className="movie__genre">{genre}</p>
          <p className="movie__year">{year}</p>
        </div>

        <div className="movie__block--awards">
          <p className="movie__awards">{awards}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

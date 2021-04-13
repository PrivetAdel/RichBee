import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovie} from '../redux/actions';

const shortGenres = (genres) => {
  return genres.split(', ').slice(0, 3).join(', ')
}

const Movie = ({id}) => {
  const dispatch = useDispatch();
  const movie = useSelector((rootReducer) => rootReducer.movies[id]);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, []);

  return (
    <div className="movie">
      {
        movie ? (
          <>
            <Link className="movie__poster-block" to={`/movies/${id}`}>
              <img className="movie__poster" alt="movie poster" src={movie.image} />
            </Link>

            <div className="movie__info-block">
              <div className="movie__block--title">
                <Link className="movie__title" to={`/movies/${id}`}>{movie.title}</Link>
                <span className="movie__rating-bg">
                  <p className="movie__rating">IMDb {movie.ratings.imDb}</p>
                </span>
              </div>
              
              <div className="movie__block--info">
                <p className="movie__type">{movie.type}</p>
                <p className="movie__genre">{shortGenres(movie.genres)}</p>
                <p className="movie__year">{movie.year}</p>
              </div>

              <div className="movie__block--awards">
                <p className="movie__awards">{movie.awards}</p>
              </div>
            </div>
          </>
        ) : ''
      }
    </div>
  );
};

export default Movie;

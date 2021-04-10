import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {putMovie} from '../redux/actions';


const Movie = ({id}) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = React.useState({
    id,
    type: '', 
    genres: '', 
    title: '', 
    image: '', 
    year: '', 
    ratings: '', 
    awards: ''
  })

  const {type, genres, title, image, year, ratings, awards} = movie;

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const url = 'https://imdb-api.com/en/API/Title/k_8zvk1y4n/';
    const options = '/Ratings';

    fetch(`${url}${id}${options}`, requestOptions)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.log('error', error))
  }, []);

  useEffect(() => {
    dispatch(putMovie(movie))
  }, [movie]);

  return (
    <div className="movie">
      <Link className="movie__poster-block" to={`/movies/${id}`}>
        <img className="movie__poster" alt="movie poster" src={image} />
      </Link>

      <div className="movie__info-block">
        <div className="movie__block--title">
          <Link className="movie__title" to={`/movies/${id}`}>{title}</Link>
          <span className="movie__rating-bg">
            <p className="movie__rating">IMDb {ratings.imDb}</p>
          </span>
        </div>
        
        <div className="movie__block--info">
          <p className="movie__type">{type}</p>
          <p className="movie__genre">{genres}</p>
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

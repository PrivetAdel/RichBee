import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Movie from '../components/Movie';
import Search from '../components/Search';
import {fetchMoviesId, fetchMovies} from '../redux/actions';

const MainPage = () => {
  const dispatch = useDispatch();
  const moviesId = useSelector((rootReducer) => rootReducer.moviesId);
  const movies = useSelector((rootReducer) => rootReducer.movies);

  useEffect(() => {
    dispatch(fetchMovies(moviesId));
  });

  const sendRequest = (title) => {
    dispatch(fetchMoviesId(title));
  };

  return (
    <>
      <div className="background-pic"></div>
      <div className="main-page">
        <h1>Unlimited&nbsp;movies, TV&nbsp;shows, and&nbsp;more.</h1>
        <h3>Watch anywhere. Cancel&nbsp;anytime.</h3>
        <Search handleSendRequest={sendRequest}/>
        {
          movies.length ? movies.map((movie) => {
            return <Movie {...movie} key={movie.id} />
          }) : ''
        }
      </div>
    </>
  );
};

export default MainPage;

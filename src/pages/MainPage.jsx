import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Movie from '../components/Movie';
import Search from '../components/Search';
import {fetchMoviesId} from '../redux/actions';

const MainPage = () => {
  const dispatch = useDispatch();
  const moviesId = useSelector((rootReducer) => rootReducer.moviesId);

  const sendRequest = (title) => {
    dispatch(fetchMoviesId(title));
  };

  return (
    <>
      <div className="background-pic"></div>
      <div className="main-page">
        <h1>Unlimited&nbsp;movies, TV&nbsp;shows, and&nbsp;more.</h1>
        <h3>Watch anywhere. Cancel&nbsp;anytime.</h3>
        <Search lightTheme handleSendRequest={sendRequest} />
        {
          moviesId.length ? moviesId.map((movieId) => {
            return <Movie id={movieId} key={movieId} />
          }) : ''
        }
      </div>
    </>
  );
};

export default MainPage;

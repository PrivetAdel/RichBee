import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Movie, Search, ErrorMessage} from '../components';
import {fetchData} from '../redux/api';
import {setData} from '../redux/actions';

const MainPage = () => {
  const dispatch = useDispatch();
  const moviesId = useSelector((rootReducer) => rootReducer.moviesId);
  const errorMessage = useSelector((rootReducer) => rootReducer.errorMessage);

  const sendRequest = (title) => {
    fetchData(title)
      .then(res => dispatch(setData(res.data)))
      .catch(error => console.error('Error', error))
  };

  return (
    <div className="main-page">
      <h1>Unlimited&nbsp;movies, TV&nbsp;shows, and&nbsp;more.</h1>
      <h3>Watch anywhere. Cancel&nbsp;anytime.</h3>
      <Search lightTheme handleSendRequest={sendRequest} />
      {
        errorMessage ? <ErrorMessage errorMessage={errorMessage} /> 
        : (
          moviesId && moviesId.map((movieId) => {
            return <Movie id={movieId} key={movieId} />
          })
        )
      }
    </div>
  );
};

export default MainPage;

import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTrailer} from '../redux/api';
import {setTrailer, deleteTrailer} from '../redux/actions';
import {Header, Similar, PopupTrailer, Footer, NotFound} from '../components';

const MoviePage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const movie = useSelector((rootReducer) => rootReducer.movies[id]);
  const trailer = useSelector((rootReducer) => rootReducer.trailer);

  const toglePopupTrailer = () => {
    setIsOpen((s) => !s)
  }

  useEffect(() => {
    fetchTrailer(id)
    .then(res => dispatch(setTrailer(res.data)))
    .catch(error => console.error('Error', error))

    return () => dispatch(deleteTrailer())
  }, [id]);

  return (
    <div className="movie-page">
      <Header />
      {
        movie ? (
          <>
            <section className="main-block">
              {
                isOpen && (<PopupTrailer closePopup={toglePopupTrailer} trailer={trailer} />)
              }
              <div className="main-block__poster-block">
                <img className="main-block__poster" alt="film poster" src={movie.image} />
              </div>
              <div className="background-gradient"></div>
              <div className="main-block__wrapper">
                <h1 className="main-block__title">{movie.title}</h1>
                <div className="main-block__label-block">
                  <span className="main-block__rating-bg">
                    <p className="main-block__rating">IMDb {movie.ratings.imDb}</p>
                  </span>
                  <div className="main-block__inner">
                    <p className="main-block__genre">{movie.genres}</p>
                    <p className="main-block__type">{movie.type}</p>
                    <p className="main-block__year">{movie.year}</p>
                  </div>
                </div>
              </div>

              <div className="main-block__wrap">
                <button className="main-block__video-btn" onClick={toglePopupTrailer} disabled={!trailer.videoUrl}>
                  Watch
                </button>
                <p className="main-block__awards">{movie.awards}</p>
              </div>
            </section>

            <section className="description-block">
              <div className="description-block__wrapper">
                <h2 className="description-block__title">Watch {movie.title} on Richbee Shows</h2>
                <p className="description-block__text">{movie.plot}</p>
              </div>
              
              <div className="similar-block">
                <h3 className="similar-block__title">You may also like</h3>
                <div className="similar-block__wrapper">
                  {
                    movie.similars && (movie.similars.map((similar) => <Similar {...similar} key={similar.id} />))
                  }
                </div>
              </div>
            </section>
          </>  
        ) : <NotFound />
      }

      <Footer />
    </div>
  )
};

export default MoviePage;

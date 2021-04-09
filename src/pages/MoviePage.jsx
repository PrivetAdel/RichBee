import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../components/Search';
import Similar from '../components/Similar';

const MoviePage = ({title, type, genre, image, year, text, ratings, awards, trailer, similar}) => {
  return (
    <div className="movie-page">
      <header className="movie-page__header">
        <Link className="movie-page__header-link" to="/main">Richbee Shows</Link>
        <Search darkTheme />
      </header>

      <section className="main-block">
        <div className="main-block__poster-block">
          <img className="main-block__poster" alt="film poster" src={image} />
        </div>
        <div className="background-gradient"></div>
        <div className="main-block__wrapper">
          <h1 className="main-block__title">{title}</h1>
          <div className="main-block__inner">
            <span className="main-block__rating-bg">
              <p className="main-block__rating">{ratings}</p>
            </span>
            <p className="main-block__genre">{genre}</p>
            <p className="main-block__type">{type}</p>
            <p className="main-block__year">{year}</p>
          </div>
        </div>

        <div className="main-block__wrap">
          <a href={trailer.link} className="main-block__video-link"  target="_blank" rel="noreferrer">Watch</a>
          <p className="main-block__awards">{awards}</p>
        </div>
      </section>

      <section className="description-block">
        <div className="description-block__wrapper">
          <h2 className="description-block__title">Watch {title} on Richbee Shows</h2>
          <p className="description-block__text">{text}</p>
        </div>
        
        <div className="similar-block">
          <h3 className="similar-block__title">You may also like</h3>
          <div className="similar-block__wrapper">
            {
              similar.map((item) => <Similar {...item} />)
            }
          </div>
        </div>
      </section>

      <footer className="movie-page__footer">
        <p>Richbee Shows</p>
      </footer>
    </div>
  )
};

export default MoviePage;
import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../components/Search';
import Similar from '../components/Similar';

const MoviePage = () => {
  return (
    <div className="movie-page">
      <header className="movie-page__header">
        <Link className="movie-page__header-link" to="/main">Richbee Shows</Link>
        <Search />
      </header>

      <section className="main-block">
        <div className="background-pic"></div>
        <div className="background-gradient"></div>
        <div className="main-block__wrapper">
          <h1 className="main-block__title">The Queen's Gambit</h1>
          <div className="main-block__inner">
            <span className="main-block__rating-bg">
              <p className="main-block__rating">IMDb 8.8</p>
            </span>
            <p className="main-block__genre">Drama</p>
            <p className="main-block__type">Movie</p>
            <p className="main-block__year">2020</p>
          </div>
        </div>

        <div className="main-block__wrap">
          <a href="#" className="main-block__video-link">Watch</a>
          <p className="main-block__awards">Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19 nominations.</p>
        </div>
      </section>

      <section className="description-block">
        <div className="description-block__wrapper">
          <h2 className="description-block__title">Watch The Queen's Gambit on Richbee Shows</h2>
          <p className="description-block__text">Nine year-old orphan Beth Harmon is quiet, sullen, and by all appearances unremarkable. That is, until she plays her first game of chess. Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the age of sixteen, she's competing for the U.S. Open championship. But as Beth hones her skills on the professional circuit, the stakes get higher, her isolation grows more frightening, and the thought of escape becomes all the more tempting. Based on the book by Walter Tevis.</p>
        </div>
        
        <div className="similar-block">
          <h3 className="similar-block__title">You may also like</h3>
          <div className="similar-block__wrapper">
            <Similar />
            <Similar />
            <Similar />
            <Similar />
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
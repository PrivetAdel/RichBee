import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {putSimilarMovie, fetchMovie} from '../redux/actions';

const maxLengthText = (text, maxLength) => {
  if (text.length > maxLength) {
    const shortText = text.slice(0, maxLength - 3);
    return shortText + '...';
  } 

  return text;
}

const Similar = ({id, title, type, genres, image, year, plot, imDbRating}) => {
  const dispatch = useDispatch();

  const followTheLink = () => {
    dispatch(fetchMovie(id));
  }

  return (
    <div className="similar">
      <img className="similar__poster" alt="similar movie poster" src={image} />

      <div className="similar__overlay">
        <div className="similar__info-block">
          <Link className="similar__title" onClick={followTheLink} to={`/movies/${id}`}>{maxLengthText(title, 33)}</Link>

          <p className="similar__genre">{genres}</p>
          <p className="similar__type">{type} {year}</p>

          <p className="similar__text">{maxLengthText(plot, 150)}</p>

          <span className="similar__rating-bg">
            <p className="similar__rating">IMDb {imDbRating}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Similar;

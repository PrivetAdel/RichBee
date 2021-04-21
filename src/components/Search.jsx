import React from 'react';
import {useDispatch} from 'react-redux';
import {cleanMoviesId} from '../redux/actions';
import classNames from 'classnames';

const Search = ({handleSendRequest, lightTheme = false, darkTheme = false, children = ''}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (title) {
      handleSendRequest(title);
      setTitle('');
    }

    if (!title) {
      dispatch(cleanMoviesId());
    }
  };

  const handleInputTitle = (evt) => {
    setTitle(evt.target.value);
  };

  return (
    <form className={classNames({
      "dark-search": darkTheme,
      "light-search": lightTheme
    })}>
      <input
        className={classNames({
          "dark-search__input": darkTheme,
          "light-search__input": lightTheme
        })}
        type="text"
        placeholder="Type here smth..."
        onChange={handleInputTitle}
        value={title}
      />
      
        <button
          className={classNames({
            "dark-search__button": darkTheme,
            "light-search__button": lightTheme
          })}
          type="submit"
          onClick={handleSubmit}
        >Search{children}</button>
      
    </form>
  );
};

export default Search;

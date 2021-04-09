import React from 'react';
import classNames from 'classnames';

const Search = ({handleSendRequest, lightTheme = false, darkTheme = false}) => {
  const [title, setTitle] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSendRequest(title);
    setTitle('');
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

      <input
        className={classNames({
          "dark-search__button": darkTheme,
          "light-search__button": lightTheme
        })}
        type="submit"
        onClick={handleSubmit}
        value="Search"
      />
    </form>
  );
};

export default Search;

import React from 'react';

const Search = ({handleSendRequest}) => {
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
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Type here smth..."
        onChange={handleInputTitle}
        value={title}
      />

      <input
        className="search__button"
        type="submit"
        onClick={handleSubmit}
        value="Search"
      />
    </form>
  );
};

export default Search;

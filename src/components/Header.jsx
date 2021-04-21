import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchData} from '../redux/api';
import {setData} from '../redux/actions';
import {Search} from '../components';

const Header = () => {
  const dispatch = useDispatch();

  const sendRequest = (title) => {
    fetchData(title)
      .then(res => dispatch(setData(res.data)))
      .catch(error => console.error('Error', error))
  };

  return (
    <header className="header">
        <Link className="header-link" to="/main">Richbee Shows</Link>
        <Search 
          darkTheme 
          handleSendRequest={sendRequest} 
          children={
            <Link className="header-link header-link--search" to="/main" />
          }
           />
      </header>
  )
}

export default Header;

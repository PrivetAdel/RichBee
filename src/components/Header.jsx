import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchData} from '../redux/api';
import {setData} from '../redux/actions';
import {Search} from '../components';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sendRequest = (title) => {
    history.push("/main")
    fetchData(title)
      .then(res => dispatch(setData(res.data)))
      .catch(error => console.error('Error', error))
  };

  return (
    <header className="header">
        <Link className="header-link" to="/main">Richbee Shows</Link>
        <Search 
          darkTheme 
          handleSendRequest={sendRequest} />
      </header>
  )
}

export default Header;

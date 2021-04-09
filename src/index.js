import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './scss/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

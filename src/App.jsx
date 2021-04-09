import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {MainPage, MoviePage} from './pages';

const App = () => {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/movies/:id" component={MoviePage} />
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
    </Switch>
  );
};

export default App;

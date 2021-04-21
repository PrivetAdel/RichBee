import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {MainPage, MoviePage, NotFoundPage} from './pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/main" component={MainPage} />
      <Route path="/movies/:id" component={MoviePage} />
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default App;

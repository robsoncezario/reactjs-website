import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home';
import Auth from '../Auth';

const PageRoutes = (props: any) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home homeEl={props.homeEl}
              howToPlayEl={props.howToPlayEl} />
      </Route>

      <Route exact path="/auth">
        <Auth />
      </Route>
    </Switch>
  );
}

export default PageRoutes;

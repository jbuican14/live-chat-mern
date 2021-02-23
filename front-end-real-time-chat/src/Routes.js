import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './navigation';
import { SignInPage, PrivateRoute } from './auth';

const routes = [];

export const Routes = ({ isLoading, user }) => {
  return (
    <Router>
      <Switch>
        <NavBar user={user} />
        {routes.map((route, index) => {
          const RouteType = route.private ? PrivateRoute : Route;
          return (
            <RouteType
              key={index}
              path={route.path}
              exact={route.exact}
              isLoading={isLoading}
              isAuthed={!!user}
            >
              <route.Component />
            </RouteType>
          );
        })}
      </Switch>
    </Router>
  );
};

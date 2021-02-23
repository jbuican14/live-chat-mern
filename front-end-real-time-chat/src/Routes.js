import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './navigation';
import { SignInPage, PrivateRoute } from './auth';

const routes = [
  {
    path: '/sign-in',
    Component: SignInPage,
  },
];

console.log(routes, SignInPage);

export const Routes = ({ isLoading, user }) => {
  return (
    <Router>
      <NavBar user={user} />
      <Switch>
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

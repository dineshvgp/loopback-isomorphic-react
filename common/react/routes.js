import React from 'react';
import ReactRouter from 'react-router';
import AppContainer from '../../client/components/AppContainer';
import Home from '../../client/components/Home';
import CoffeeShops from '../../client/components/CoffeeShops';

const { DefaultRoute, Route } = ReactRouter;

const routes = (
  <Route handler={AppContainer}>
    <Route name='coffeeshops' path='coffeeshops' handler={CoffeeShops} />
    <DefaultRoute handler={Home} />
  </Route>
);

module.exports = routes;






import React from 'react';
import Flummox from 'flummox';
import CoffeeShopActions from '../../client/actions/CoffeeShopActions';
import CoffeeShopStore from '../../client/stores/CoffeeShopStore';

export default class FluxManager extends Flummox {
  constructor() {
    super();

    this.createActions('coffeeShopActions', CoffeeShopActions);
    this.createStore('coffeeShopStore', CoffeeShopStore, this);
  }
}

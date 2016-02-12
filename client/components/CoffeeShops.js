import React from 'react';

export default class CoffeeShops {

  contextTypes: {
    flux: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.actions = this.props.flux.getActions('coffeeShopActions');
  }

  render() {
    return (
      <section>
        <button onClick={::this.handleLoadCoffeeShops}>
          Load Users and then check console
        </button>
        <button onClick={::this.handleAddCoffeeShop}>
          Add User
        </button>
      </section>
    );
  }

  handleLoadCoffeeShops() {
    console.log("====ftgh====",this.actions.find());
  }

  handleAddCoffeeShop() {

  }
}

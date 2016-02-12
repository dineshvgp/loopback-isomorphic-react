import React, { PropTypes } from 'react';

export default class Home {

  static propTypes = {
    name: PropTypes.string,
    city: PropTypes.string
  };

  render() {
    const { name, city } = this.props;

    return (
      <div>
        Hi, welcome back!  Here is a review from the db:

        <ul>
          <li>{name}</li>
          <li>{city}</li>
        </ul>
      </div>
    );
  }
}

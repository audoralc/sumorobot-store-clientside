/*
 *
 * Checkout
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Checkout extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Checkout" meta={[ { name: 'description', content: 'Description of Checkout' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

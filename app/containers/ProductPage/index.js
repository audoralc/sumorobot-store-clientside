/*
 *
 * ProductPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class ProductPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="ProductPage" meta={[ { name: 'description', content: 'Description of ProductPage' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

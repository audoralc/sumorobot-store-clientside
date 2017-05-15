/*
 *
 * Cart
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

export default class Cart extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Cart" meta={[ { name: 'description', content: 'Description of Cart' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>
        <Sidebar> </Sidebar>
        <Footer> </Footer>
      </div>
    );
  }
}

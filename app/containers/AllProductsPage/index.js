/*
 *
 * AllProductsPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Sorter from 'components/Sorter';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

export default class AllProductsPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="AllProductsPage" meta={[ { name: 'description', content: 'Description of AllProductsPage' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>
        <Sidebar> </Sidebar>
        <Sorter> </Sorter>
        <Footer> </Footer>
      </div>
    );
  }
}

/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>
        <Sidebar> </Sidebar>
        <Footer> </Footer>
      </div>
    );
  }
}

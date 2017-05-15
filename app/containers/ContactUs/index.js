/*
 *
 * ContactUs
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

export default class ContactUs extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="ContactUs" meta={[ { name: 'description', content: 'Description of ContactUs' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>
        <Sidebar> </Sidebar>
        <Footer> </Footer>
      </div>
    );
  }
}

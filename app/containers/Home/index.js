/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

const BodyContainer = glamorous.div({
  minHeight: '100%',
  flex: '1',
})

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Header> </Header>

        <BodyContainer>
            <Navigation> </Navigation>
            <Sidebar> </Sidebar>
        </BodyContainer>

        <Footer> </Footer>
      </div>
    );
  }
}

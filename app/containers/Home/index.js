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
import BodyContainer from 'components/BodyContainer';
import Footer from 'components/Footer';

const BarsContainer = glamorous.div({
  minHeight: '100%',
  flex: '1',
  flexDirection: 'row',
})



export default class Home extends React.PureComponent {
  render() {

  const content = {
    height: '100vh',
  }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Header> </Header>

        <Navigation> </Navigation>

        <BodyContainer>
          <div style={content}> </div>
        </BodyContainer>
        <Footer> </Footer>
      </div>
    );
  }
}

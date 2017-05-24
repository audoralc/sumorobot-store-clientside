/*
 *
 * News
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import BodyContainer from 'components/BodyContainer';
import Footer from 'components/Footer';

export default class News extends React.PureComponent {
  render() {

 const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '100%',
      gridTemplateRows: '10% 85% 5%',       
    }

    return (
      <div style={pageGrid}>
        <Helmet title="News" meta={[ { name: 'description', content: 'Description of News' }]}/>

      <Header></Header>
      <BodyContainer></BodyContainer>      
      <Footer></Footer>
      </div>
    );
  }
}

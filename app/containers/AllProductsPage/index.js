/*
 *
 * AllProductsPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import BodyContainer from 'components/BodyContainer';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

export default class AllProductsPage extends React.PureComponent {
  render() {

    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '85% 15%',
      gridTemplateRows: '10% 85% 5%',       
    }

    return (
      <div style={pageGrid}>
        <Helmet title="AllProductsPage" meta={[ { name: 'description', content: 'Description of AllProductsPage' }]}/>
        <Header> </Header>
       
        <BodyContainer> </BodyContainer>  
        <Sidebar> </Sidebar>
         
        <Footer> </Footer>
       
      </div>
    );
  }
}

/*
 *
 * ProductDashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Tabs, Tab} from 'material-ui/Tabs';
import GetProducts from 'components/GetProducts';
import StoreProducts from 'components/StoreProducts';
import UpdateProducts from 'components/UpdateProducts';

export default class ProductDashboard extends React.PureComponent {
  render() {

    const tabStyle ={
      backgroundColor: '#bdbec0',
      color: '#606E72',
    }

    return (
      <div>
        <Helmet title="ProductDashboard" meta={[ { name: 'description', content: 'Description of ProductDashboard' }]}/>
        <Tabs>
          <Tab label="All Products" style={tabStyle}>
            <div>
              <GetProducts> </GetProducts>
            </div>
          </Tab>


          <Tab label="New Product" style={tabStyle}>
            <div>
              <StoreProducts> </StoreProducts>
            </div>
          </Tab>

          <Tab label="Update Products" style={tabStyle}>
            <div>
              <UpdateProducts> </UpdateProducts>
            </div>
          </Tab>

        </Tabs>
      </div>
    );
  }
}

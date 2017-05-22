/*
 *
 * CategoryDashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Tabs, Tab} from 'material-ui/Tabs';
import GetCategories from 'components/GetCategories';
import StoreCategory from 'components/StoreCategory';
import UpdateCategory from 'components/UpdateCategory';

export default class CategoryDashboard extends React.PureComponent {
  render() {

  const tabStyle ={
    backgroundColor: '#bdbec0',
    color: '#606E72',
  }

    return (
      <div>
        <Helmet title="CategoryDashboard" meta={[ { name: 'description', content: 'Description of CategoryDashboard' }]}/>

        <Tabs>
          <Tab label="Categories" style={tabStyle}>
            <GetCategories> </GetCategories>
          </Tab>

          <Tab label="New Category" style={tabStyle}>
            <StoreCategory> </StoreCategory>
          </Tab>

          <Tab label="Update Category" style={tabStyle}>
            <UpdateCategory> </UpdateCategory>
          </Tab>

        </Tabs>

      </div>
    );
  }
}

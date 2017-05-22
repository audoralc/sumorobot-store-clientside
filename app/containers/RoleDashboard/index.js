/*
 *
 * RoleDashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Tabs, Tab} from 'material-ui/Tabs';
import GetRoles from 'components/GetRoles';
import StoreRoles from 'components/StoreRoles';
import UpdateRoles from 'components/UpdateRoles';

export default class RoleDashboard extends React.PureComponent {
  render() {

    const tabStyle ={
      backgroundColor: '#bdbec0',
      color: '#606E72',
    }

    return (
      <div>
        <Helmet title="RoleDashboard" meta={[ { name: 'description', content: 'Description of RoleDashboard' }]}/>

      <Tabs>
        <Tab label="Current Roles" style={tabStyle}>
          <div>
            <GetRoles> </GetRoles>
          </div>
        </Tab>

        <Tab label="New Role" style={tabStyle}>
          <div>
            <StoreRoles> </StoreRoles>
          </div>
        </Tab>

        <Tab label="Update Role" style={tabStyle}>
          <div>
            <UpdateRoles> </UpdateRoles>
          </div>
        </Tab>
      </Tabs>
      </div>
    );
  }
}

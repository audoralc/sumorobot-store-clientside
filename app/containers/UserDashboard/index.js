/*
 *
 * UserDashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Tabs, Tab} from 'material-ui/Tabs';
import GetUsers from 'components/GetUsers';
import UpdateUser from 'components/UpdateUser';

export default class UserDashboard extends React.PureComponent {
  render() {

    const tabStyle ={
      backgroundColor: '#bdbec0',
      color: '#606E72',
    }

    return (
      <div>
        <Helmet title="UserDashboard" meta={[ { name: 'description', content: 'Description of UserDashboard' }]}/>
        <Tabs>
          <Tab label="All Users" style={tabStyle}>
            <div>
              <GetUsers> </GetUsers>
            </div>
          </Tab>

          <Tab label="Update User" style={tabStyle}>
            <div>
              <UpdateUser> </UpdateUser>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

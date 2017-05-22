/*
 *
 * OrderDashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Tabs, Tab} from 'material-ui/Tabs';
import GetOrders from 'components/GetOrders';
import ShowOrder from 'components/ShowOrder';
import UpdateOrder from 'components/UpdateOrder';

export default class OrderDashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="OrderDashboard" meta={[ { name: 'description', content: 'Description of OrderDashboard' }]}/>

        <Tabs>
          <Tab label="All Orders">
            <div>
              <GetOrders></GetOrders>
            </div>
          </Tab>
          <Tab label=""></Tab>
          <Tab label=""></Tab>
        </Tabs>
      </div>
    );
  }
}

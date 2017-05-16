/*
 *
 * UserDashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class UserDashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="UserDashboard" meta={[ { name: 'description', content: 'Description of UserDashboard' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

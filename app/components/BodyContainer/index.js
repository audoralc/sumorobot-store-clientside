/**
*
* BodyContainer
*
*/

import React from 'react';
import Sidebar from 'components/Sidebar';




class BodyContainer extends React.PureComponent {
  render() {

const bodyContainer={
  display: 'flex',
  flexDirection: 'row',
}
    return (
      <div style={bodyContainer}>
        {this.props.children}
        <Sidebar> </Sidebar>        
      </div>
    );
  }
}

export default BodyContainer;

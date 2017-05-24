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
  gridRow: '2 / 2', 
  gridColumn: '1 / 1',   
  width: '100%', 
}
    return (
      <div style={bodyContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default BodyContainer;

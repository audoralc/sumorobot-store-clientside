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
  gridColumn: '1 / 2', 
  height: '90vh',   
  background: 'blue', 
  width: '200px', 
}
    return (
      <div style={bodyContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default BodyContainer;

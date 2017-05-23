/**
*
* Sidebar
*
*/

import React from 'react';
import glamorous from 'glamorous';




class Sidebar extends React.PureComponent {
  render() {

const sidebarRibbon = {  
  background: 'rgba(247,102,8,.5)',  
  gridRow: '2 / 2', 
  gridColumn: '2 / 1',
  height: '90vh', 
  width: '200px', 
}

const logoStyle = { 
  width: '50px', 
}

    return (
      <div style={sidebarRibbon}>        
          <img src="http://localhost:8000/img/sumomasklogo.png" alt="Sumo Robot League Logo" style={logoStyle}  />       
      </div>
    );
  }
}

export default Sidebar;

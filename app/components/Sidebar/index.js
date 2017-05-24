/**
*
* Sidebar
*
*/

import React from 'react';
import glamorous from 'glamorous';




class Sidebar extends React.PureComponent {
  render() {

const sidebarBlock = {  
  borderLeft: 'solid 2vw ',  
  gridRow: '1/ span 2', 
  gridColumn: '2 / 2', 
  borderLeft: '2vh solid rgba(247,102,8,.5)',  
}

const logoStyle = { 
  width: '80%',
  margin: '10% 10%',  
}


    return (
      <div style={sidebarBlock}> 
            
          <img src="http://localhost:8000/img/sumomasklogo.png" alt="Sumo Robot League Logo" style={logoStyle}  />     
      </div>
    );
  }
}

export default Sidebar;

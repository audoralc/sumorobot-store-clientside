/**
*
* Sidebar
*
*/

import React from 'react';
import glamorous from 'glamorous';

const SidebarBlock = glamorous.section({
  height: '100%',

})


class Sidebar extends React.PureComponent {
  render() {

const sidebarRibbon = {
  width: '2vw',
  background: 'rgba(247,102,8,.5)',
  marginTop: '-20vh',
}

const logoStyle = { 
  margin: '24vh 3vw 3vw 3vw',
  width: '18vw',
}

    return (
      <div style={sidebarRibbon}>
        <SidebarBlock>
          <img src="http://localhost:8000/img/sumomasklogo.png" alt="Sumo Robot League Logo" style={logoStyle}  />
        </SidebarBlock>
      </div>
    );
  }
}

export default Sidebar;

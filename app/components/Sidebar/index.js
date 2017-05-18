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
  background: 'rgba(56,193,239,.5)',
  marginTop: '-20vh',
}

    return (
      <div style={sidebarRibbon}>
        <SidebarBlock>
          <img src="srl.png" />
        </SidebarBlock>
      </div>
    );
  }
}

export default Sidebar;

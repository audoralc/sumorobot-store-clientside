/**
*
* Sidebar
*
*/

import React from 'react';
import glamorous from 'glamorous';

const SidebarBlock = glamorous.section({
  borderLeft: '2vw solid rgba(56,193,239,.5)',
  height: '100vh',
  marginLeft: '80vw',
  marginTop: '-20vh',
})


class Sidebar extends React.PureComponent {
  render() {
    return (
      <div>
        <SidebarBlock>
          <img src="srl.png" />
        </SidebarBlock>
      </div>
    );
  }
}

export default Sidebar;

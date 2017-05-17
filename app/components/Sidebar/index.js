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

/**
*
* Footer
*
*/

import React from 'react';
import glamorous from 'glamorous';


const NavRibbon = glamorous.nav({
  background: 'rgba(56,193,239,.5)',
  height: 50,
})

const SocialRibbon = glamorous.ul({
  background: 'rgba(114,247,58,.5)',
  height: 50,
})

const InfoRibbon = glamorous.section({
  background: 'rgba(239,56,56,.5)',
  height: 50,
})



class Footer extends React.PureComponent {
  render() {
    return (
      <div>
        <NavRibbon> </NavRibbon>
        <SocialRibbon> </SocialRibbon>
        <InfoRibbon> </InfoRibbon>

      </div>
    );
  }
}

export default Footer;

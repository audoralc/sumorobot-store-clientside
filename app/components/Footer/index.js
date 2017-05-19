/**
*
* Footer
*
*/

import React from 'react';
import glamorous from 'glamorous';

const FooterRibbon = glamorous.div({
  background: 'rgb(109, 110, 114)',
  width: '100vw',
  marginLeft:'0',
  textAlign: 'center', 
})

const NavRibbon = glamorous.nav({
  height: '1em',
})

const SocialRibbon = glamorous.ul({
  height: '1em',
  margin: 0,
})

const InfoRibbon = glamorous.p({
  color: '#d8d8d8',
})

const NavLink = glamorous.a({
  textDecoration: 'none',
  color: 'rgb(254,138,63)',
  ':hover': {
    color: '#bdbec0'
  }
})

class Footer extends React.PureComponent {
  render() {
    return (
      <div>
        <FooterRibbon>

          <SocialRibbon> </SocialRibbon>
          <NavRibbon>
            <NavLink href='/'> home. </NavLink>
            <NavLink href='/about'> about.  </NavLink>
            <NavLink href='/news'> news. </NavLink>
            <NavLink href='https://cloud.sumorobotleague.com/'> cloud. </NavLink>
          </NavRibbon>

            <InfoRibbon>
              Sumo Robot League, 540 Telfair Street, Augusta, GA 30901
              <NavLink href='mailto:heya@sumorobotleague.com'> heya@sumorobotleague.com </NavLink>
            </InfoRibbon>

        </FooterRibbon>
      </div>
    );
  }
}

export default Footer;

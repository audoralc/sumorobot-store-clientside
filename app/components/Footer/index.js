/**
*
* Footer
*
*/

import React from 'react';
import glamorous from 'glamorous';

const FooterRibbon = glamorous.div({
  background: 'rgba(48,48,48,.8)',
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
  color: 'rgb(247,191,58)',
  ':hover': {
    color: '#d8d8d8'
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

            <NavLink href=''>  </NavLink>
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

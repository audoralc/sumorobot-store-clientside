/**
*
* Footer
*
*/

import React from 'react';
import glamorous from 'glamorous';

const NavBlock = glamorous.nav({
  height: '1em',
})

const InfoBlock  = glamorous.p({
  color: '#d8d8d8',
  fontFamily: "Share Tech Mono", 
})

  const NavLink = glamorous.a({
    textDecoration: 'none',
    color: 'rgb(254,138,63)',
    ':hover': {
      color: '#bdbec0'
    },
    fontFamily: "Share Tech Mono",
    fontSize: '1.25em',  
  })

class Footer extends React.PureComponent {
  render() {
  
  const footerWrapper = {
    background: 'rgb(109, 110, 114)',   
    textAlign: 'center',
    gridRow: '3 / 3', 
    gridColumn: '1 / 2 span', 
    paddingTop: '1em',    
  }
    return (
      
        <div style={footerWrapper}>

          <NavBlock>
            <NavLink href='/'> home. </NavLink>
            <NavLink href='/about'> about.  </NavLink>
            <NavLink href='/news'> news. </NavLink>
            <NavLink href='https://cloud.sumorobotleague.com/'> cloud. </NavLink>
          </NavBlock>

            <InfoBlock>
              Sumo Robot League, 540 Telfair Street, Augusta, GA 30901
              <NavLink href='mailto:heya@sumorobotleague.com'> heya@sumorobotleague.com </NavLink>
            </InfoBlock>

        </div>
    
    );
  }
}

export default Footer;

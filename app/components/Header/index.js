/**
*
* Header
*
*/

import React from 'react';
import glamorous from 'glamorous';


const NavLink = glamorous.a({
  textDecoration: 'none',
  fontFamily: 'Open Sans',
  color: 'rgb(48,48,48)',
  width: '80%',
  fontSize: '1.5em',
  padding: '0 .25em',
  ':hover': {
    color: 'rgb(183, 1, 26)'
  }
})

const NavRibbon = glamorous.div({
  background: 'rgba(189, 190, 192, .5)',
  height: '3vh',
  width: '100vw',
})

class Header extends React.PureComponent {
  render() {

    const navBlockStyle = {
      width: '100%',
      height: '5vh',
      padding: '1em 1em 0 1em',
      maxWidth: '75vw',
      textAlign: 'right',
    }

    return (
      <div>
        <nav style={navBlockStyle}>
          <NavLink href='/'> Home </NavLink>
          <NavLink href='/about'> About  </NavLink>
          <NavLink href='/products'> Products </NavLink>
          <NavLink href='/contact'> Contact Us </NavLink>
          <NavLink href='http://cloud.sumorobotleague.com'> The Cloud </NavLink>
          <NavLink href='/news'> News </NavLink>
        </nav>
        <NavRibbon> </NavRibbon>
      </div>
    );
  }
}

export default Header;

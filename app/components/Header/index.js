/**
*
* Header
*
*/

import React from 'react';
import glamorous from 'glamorous';


const NavLink = glamorous.a({
  textDecoration: 'none',
  margin: '5vw', 
  color: 'rgb(48,48,48)',
  fontSize: '1.5em',
  ':hover': {
    color: 'rgb(56,193,239)'
  }
})


class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <nav>
          <NavLink href='/'> Home </NavLink>
          <NavLink href='/about'> About  </NavLink>
          <NavLink href='/products'> </NavLink>
          <NavLink href='/contact'> Contact Us </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;

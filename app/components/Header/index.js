/**
*
* Header
*
*/

import React from 'react';
import glamorous from 'glamorous';


const NavLink = glamorous.a({
  textDecoration: 'none',
  fontFamily: 'Share Tech Mono',
  color: 'rgb(48,48,48)',  
  fontSize: '1.5em',
  padding: '0 .25em',
  ':hover': {
    color: 'rgb(183, 1, 26)'
  }
})



class Header extends React.PureComponent {
  render() {

    const navBlockStyle = {
      gridRow: '1 / span', 
      gridColumn: '1 / 2',
      justifyItems: 'start',       
      height: '5vh',
      padding: '1em 1em 0 1em',
      borderBottom: '2vh solid rgba(109, 110, 114, .4)',       
    }

    return (
      <div style={navBlockStyle}>
        <nav>
          <NavLink href='/'> Home </NavLink>
          <NavLink href='/about'> About  </NavLink>
          <NavLink href='/all-products'> Products </NavLink>
          <NavLink href='/contact'> Contact Us </NavLink>
          <NavLink href='http://cloud.sumorobotleague.com'> The Cloud </NavLink>
          <NavLink href='/news'> News </NavLink>
        </nav>
        
      </div>
    );
  }
}

export default Header;

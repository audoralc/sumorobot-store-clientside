/**
*
* UpdateRoles
*
*/

import React from 'react';

class UpdateRoles extends React.PureComponent {
  render() {

   const formStyle= { 
      display: 'flex', 
      flexDirection: 'column', 
      width: '40%', 
      margin: '4vh auto 0 auto', 
    } 
       const inputSetStyle = {
          display: 'flex',  
          flexDirection: 'column',
        }

          const labelStyle ={ 
            padding: '.5em 0',
          }

    const legendStyle= { 
      fontSize: '1.5em', 
      margin: '0 auto',
    }

    const buttonStyle={ 
            margin: '1em auto', 
          }
    
    return (
      <div>
        <form style={formStyle}> 

        <legend style={legendStyle}> Update Role</legend>
          
          <p style={inputSetStyle}>
          <label style={labelStyle}> Which role is changing?</label>
          <select> 
            <option>existing roles</option> 
          </select> 
          </p>

          <p style={inputSetStyle}>
          <label> New Role name</label>
          <input type="text" />
          <button style={buttonStyle}> Submit </button>
          </p>

        </form>
      </div>
    );
  }
}

export default UpdateRoles;

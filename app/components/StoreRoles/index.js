/**
*
* StoreRoles
*
*/

import React from 'react';

class StoreRoles extends React.PureComponent {
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
          <legend style={legendStyle}> New Role Name </legend>
            <label style={labelStyle}> New Role name</label>
            <input type="text" />
            <button style={buttonStyle}> Submit </button>

        </form>
      </div>
    );
  }
}

export default StoreRoles;

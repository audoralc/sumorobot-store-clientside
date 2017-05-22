/**
*
* UpdateRoles
*
*/

import React from 'react';

class UpdateRoles extends React.PureComponent {
  render() {
    return (
      <div>
        <form> 

          <select> 
            <option>existing roles</option> </select> 

          <input type="text" />
          <button> Submit </button>
        </form>
      </div>
    );
  }
}

export default UpdateRoles;

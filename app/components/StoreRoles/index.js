/**
*
* StoreRoles
*
*/

import React from 'react';

class StoreRoles extends React.PureComponent {
  render() {
    return (
      <div>
        <form> 
          <legend> New Role Name </legend>
          <input type="text" />
          <button> Submit </button>

        </form>
      </div>
    );
  }
}

export default StoreRoles;

/**
*
* StoreCategory
*
*/

import React from 'react';

class StoreCategory extends React.PureComponent {
  render() {
    return (
      <div>
      <form>
        
        <input type="text" id="categoryName" /> 
        <button type="submit"> Submit </button> 
      </form> 
      </div>
    );
  }
}

export default StoreCategory;

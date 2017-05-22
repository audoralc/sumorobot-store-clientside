/**
*
* StoreProducts
*
*/

import React from 'react';

class StoreProducts extends React.PureComponent {
  render() {
    return (
      <div>
        <form> 
        <input type="text" id="name" />

        <select id="categories" > <option> categories here</option></select>       

        <input type="" id="price" />
        
        <legend> Description </legend>
        <textarea id="description"></textarea>

        <input type="file" id="image" /> 
        
        <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default StoreProducts;

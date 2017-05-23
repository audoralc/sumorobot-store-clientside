/**
*
* StoreCategory
*
*/

import React from 'react';

class StoreCategory extends React.PureComponent {
  render() {
    const formStyle= { 
    display: 'flex', 
    flexDirection: 'column', 
    width: '30%', 
    margin: '10vh auto', 
  } 

  const labelStyle = {
    padding: '1em 0', 
  }

  const legendStyle= { 
    fontSize: '1.5em',
    margin: '.5em 0',   
  }

  const buttonStyle={ 
    margin: '1.5em 0', 
  }
  
    return (
      <div>
      <form style={formStyle}>
        <legend style={legendStyle}>Create a product category</legend>
        <label style={labelStyle}> Category Name </label>
        <input type="text" id="categoryName" /> 
        <button type="submit" style={buttonStyle}> Submit </button> 
      </form> 
      </div>
    );
  }
}

export default StoreCategory;

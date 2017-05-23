/**
*
* UpdateCategory
*
*/

import React from 'react';

class UpdateCategory extends React.PureComponent {
  render() {

    const formStyle= { 
    display: 'flex', 
    flexDirection: 'column', 
    width: '30%', 
    margin: '10vh auto', 
  } 

  const labelStyle = {  
    padding: '.5em 0', 
    
  }

  const legendStyle= { 
    fontSize: '1.5em', 
    margin: '1em',
  }

  const buttonStyle={ 
    margin: '1em 0',
  }
    return (
       <div>
      <form style={formStyle}>
        <legend style={legendStyle}> Update an existing category </legend>

        <label style={labelStyle}> Select a category to change </label>
        <select> <option> existing categories</option></select>

        <label style={labelStyle}> New name </label>
        <input type="text" id="categoryName" /> 
        <button type="submit" style={buttonStyle}> Submit </button> 
      </form> 
      </div>
    );
  }
}

export default UpdateCategory;

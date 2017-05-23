/**
*
* StoreProducts
*
*/

import React from 'react';

class StoreProducts extends React.PureComponent {
  render() {
 const bodyWrapper= { 
    display: 'flex', 
    flexDirection: 'row', 
  }

      const formStyle= { 
      display: 'flex', 
      flexDirection: 'column', 
      width: '40%', 
      margin: '4vh auto 0 auto', 
    } 

      const tempStyle = {
      width: '50%', 
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
      <div style={bodyWrapper}>
      
        <form style={formStyle}>

          <legend style={legendStyle}> Product Update</legend>
            
            <p style={inputSetStyle}>
            <label style={labelStyle}>Product name</label>
            <input type="text" id="name" />
          </p>  

          <p style={inputSetStyle}>
            <label style={labelStyle}> Select category</label>
            <select id="categories" > <option> categories here</option></select> 
           </p>       
            
          <p style={inputSetStyle}>
            <label style={labelStyle}>Price per unit</label>
            <input type="" id="price" />
            </p>
            
          <p style={inputSetStyle}>
            <label style={labelStyle}> Description </label>
            <textarea id="description"></textarea>
            </p>
            
          <p style={inputSetStyle}>
              <label style={labelStyle}> Upload image </label>
              <input type="file" id="image" /> 
            </p>

              <p style={buttonStyle}> 
              <button type="submit" > Submit </button>
            </p>
        </form>

        <div style={tempStyle}> </div>
        </div>
    );
  }
}

export default StoreProducts;

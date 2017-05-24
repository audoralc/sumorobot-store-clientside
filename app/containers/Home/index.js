/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import BodyContainer from 'components/BodyContainer';
import Footer from 'components/Footer';
import { Blockquote } from 'rebass';




export default class Home extends React.PureComponent {
  render() {

const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '100%',
      gridTemplateRows: '10% 80% 10%',       
    }

    const textBlock = { 
      margin: '0 2vw',      
    }
        const h1Style ={ 
          textAlign: 'center', 
          fontSize: '2.8em',
          margin: '2vh 0',  
        }
        
        const h2Style = {
          textAlign: 'center',
          fontSize: '1.5em', 
          margin: '4vh 2vw',
          fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
          color: 'rgb(109, 110, 114)', 
        }

        const pStyle = { 
          textAlign: 'center',
          margin: '2vh 4vw',
          fontSize: '1.2em',          
        }

      const quoteBlock ={ 
        display: 'flex', 
        flexDirection:'row',
        margin: '4vh 2vw',          
      }
       
       const quoteStyle = {
         padding: '1em',
         textAlign: 'justify',                            
        }
        
          const quote1Span = {
            background: 'rgba(242,60,85,.4)',
            padding: '.1em',                                
          }

          const quote2Span ={ 
            background: 'rgba(53,99,168,.4)',
            padding: '.1em',  
          }
        
        
      const logoStyle ={ 
        margin: '2vh 20% 0 20%',
        width: '60%',  
      }

      const picStyle = {
        width: "80%",
        margin: '1vh 10%',         
      }
 
      const bodyBorder = {
       borderLeft: '2vh solid rgba(247,102,8,.5)',
       borderRight: '2vh solid rgba(247,102,8,.5)',
       height: '100%',
      }

    return (
      <div style={pageGrid}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Header> </Header>      

        <BodyContainer> 
          <div style={bodyBorder}>             
          <img src="http://localhost:8000/img/largeTextLogo.png" style={logoStyle} />
          <img src="http://localhost:8000/img/LCPWSSumoRobot-92.jpg" style={picStyle} />
            
          <div style={textBlock}>             

           <h1 style={h1Style}>  Building the Programmers of the Future </h1>
           <h2 style={h2Style}> Sumo Robot League believes in a future where every person has the skills to build a robot of their own.</h2>

           <p style={pStyle}>  We have focused thousands of hours on developing an affordable robotics kit, programming class, and S.T.E.M. Teacher Training camp at a fraction of the cost of other robotics programs.</p> 
           
           <p style={pStyle}>This allows every student the opportunity to learn to code and build a robot of their own. </p>

           <div style={quoteBlock}> 
              <Blockquote source="Ned Murray, Headmaster - Episcopal Day School" style={quoteStyle}> <span style={quote1Span}> We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done. Sumo Robot League has made it easier for us to adapt and adopt by providing training, curriculum, materials, and support. </span> </Blockquote>

              <Blockquote source="Sam, Student, Atlanta" style={quoteStyle}> <span style={quote2Span}> We are a small school, roughly 330 students... Our robotics team as of now consists of about 8 people, a number that we hope to increase in time, so these large, expensive programs simply are not compatible with our school as of yet. That’s why we use Sumo Robot League. </span> </Blockquote>
            </div>

           </div>
           </div> 
        </BodyContainer>

        

        <Footer> </Footer>
      </div>
    );
  }
}

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
      gridTemplateColumns: '85% 15%',
      gridTemplateRows: '10% 85% 5%',       
    }

    const textBlock = { 
      margin: '2vh 2vw',
    }
      
      const quoteBlock ={ 
        display: 'flex', 
        flexDirection:'row',          
      }

        const firstQuote = {
          background: 'rgba(242,60,85,.4)', 
                       
        }

        const secondQuote ={ 
          background: 'rgba(53,99,168,.4)'
        }

      const imgStyle = {
        width: "100%",
      }
    return (
      <div style={pageGrid}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Header> </Header>      

        <BodyContainer>              
          
          <img src="http://localhost:8000/img/LCPWSSumoRobot-92.jpg" style={imgStyle} />
            
          <div style={textBlock}> 
            <div style={quoteBlock}> 
              <Blockquote source="Ned Murray, Headmaster - Episcopal Day School"> <span style={firstQuote}> We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done. Sumo Robot League has made it easier for us to adapt and adopt by providing training, curriculum, materials, and support. </span> </Blockquote>

              <Blockquote source="Sam, Student, Atlanta"> <span style={secondQuote}> We are a small school, roughly 330 students... Our robotics team as of now consists of about 8 people, a number that we hope to increase in time, so these large, expensive programs simply are not compatible with our school as of yet. That’s why we use Sumo Robot League. </span> </Blockquote>
            </div>

           <h1> Building the Programmers of the Future </h1>
           <p> Sumo Robot League believes in a future where every person has the skills to build a robot of their own. We have focused thousands of hours on developing an affordable robotics kit, programming class, and S.T.E.M. Teacher Training camp at a fraction of the cost of other robotics programs. This allows every student the opportunity to learn to code and build a robot of their own. </p>
           </div>
        </BodyContainer>

        <Sidebar> </Sidebar>

        <Footer> </Footer>
      </div>
    );
  }
}

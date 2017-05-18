/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import BodyContainer from 'components/BodyContainer';
import Footer from 'components/Footer';
import { Blockquote } from 'rebass';

const BarsContainer = glamorous.div({
  minHeight: '100%',
  flex: '1',
  flexDirection: 'row',
})



export default class Home extends React.PureComponent {
  render() {

  const content = {
    height: '100vh',
    width: '65vw',
    padding: '1vw',
    margin: '5vw',
    flexDirection: 'column',
  }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Header> </Header>

        <Navigation> </Navigation>

        <BodyContainer>
          <div style={content}>
            <Blockquote source="Ned Murray, Headmaster - Episcopal Day School"> We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done. Sumo Robot League has made it easier for us to adapt and adopt by providing training, curriculum, materials, and support. </Blockquote>

            <Blockquote source="Sam, Student, Atlanta"> We are a small school, roughly 330 students... Our robotics team as of now consists of about 8 people, a number that we hope to increase in time, so these large, expensive programs simply are not compatible with our school as of yet. That’s why we use Sumo Robot League.</Blockquote>
           

           <h1> BUILDING THE PROGRAMMERS OF THE FUTURE </h1>
           <p> Sumo Robot League believes in a future where every person has the skills to build a robot of their own. We have focused thousands of hours on developing an affordable robotics kit, programming class, and S.T.E.M. Teacher Training camp at a fraction of the cost of other robotics programs. This allows every student the opportunity to learn to code and build a robot of their own. </p>
           </div>
        </BodyContainer>
        <Footer> </Footer>
      </div>
    );
  }
}

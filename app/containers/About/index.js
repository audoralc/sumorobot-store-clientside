/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import BodyContainer from 'components/BodyContainer';
import Footer from 'components/Footer';

export default class About extends React.PureComponent {
  render() {

  const content = {
    height: '100vh',
    width: '65vw',
    padding: '1vw',
    margin: '5vw',
  }

    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>

        <BodyContainer>
          <div style={content}>
            <p> Sumo Robot League is a non-profit robotics curriculum and sports league operated by HACK Augusta. Students design and build robots to compete in fully autonomous sumo wrestling. Each match motivates kids to learn and understand the principles of S.T.E.M. (Science, Technology, Engineering and Math), preparing them for the future by fostering an interest in these critical disciplines and an understanding of how they are practiced.</p>

            <h2> COMPETITION & CURRICULUM </h2>
            <p>Sumo Robot League is a scalable STEM education platform that offers an affordable competitive robotics curriculum for middle and high school students. Our program provides multiple hands on lessons that give students the opportunity to build electrical circuits, design and 3D print adaptive components, and code sensor-based autonomous response algorithms using the actual C++ programming language. In additiona, our kits are expandable to include exercises in mobile app development, machine learning, and the internet of things.  </p>
            <p>The League has a Fall and Spring season coordinated with local school system schedules. Regional competitions are held at the end of each season in local communities. The championship tournament is held in Augusta, Georgia at the Greater Augusta Innovation Academy located in an 18,000 sq. foot historic schoolhouse built in 1802. HACK Augusta is the non-profit that manages Sumo Robot League as well as theClubhou.se, a makerspace and startup incubator. This short video done by one of our students gives a glimpse into the scope of our program and what kids can do. </p>

            <h2> BENEFITS</h2>
            <p>Sumo Robot League is hands on, creative, outside-the-box, and self directed. We offer training, online resource libraries, and weekly virtual support for teachers and volunteers. Though our kits include all parts necessary for building a robot, we also include access to CAD and STL files so kids can design and 3D print their own custom robots. By merging sports, design, engineering, and programming fundamentals, Sumo Robot League helps kids find what motivates each of them to learn coding and STEM (Science, Technology, Engineering, Arts and Math).  </p>

            <h2> OUR GOALS</h2>
              <ol>
                <li>Teach students about robots and programming.</li>
                <li>To give marginalized students the same recognition for efforts in technology as that given to students in athletics.</li>
                <li>Provide tools, educational opportunities for science and math teachers to incorporate this curriculum into their STEM standards and Career Pathway standards.</li>
              </ol>
          </div>
        </BodyContainer>

        <Footer> </Footer>
      </div>
    );
  }
}

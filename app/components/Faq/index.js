/**
*
* Faq
*
*/

import React from 'react';
import Collapsible from 'react-collapsible'; 
import glamorous from 'glamorous'; 
import SvgIcon from 'material-ui/SvgIcon'; 



class Faq extends React.PureComponent {
  render() {
    const accordionStyle ={ 
    fontSize: '1.5em', 
    margin: '1em', 
  }
  
    const qStyle = {
      background: 'rgba(53,99,168,.4)',
      padding: '.1em',
      margin: '1em', 
      fontSize: '.9em', 
    }
    const answerStyle = { 
      margin: '1em 1.5em',
      fontSize: '.75em',  
    }
    return (
  
      <div style={accordionStyle}> 
 
      <Collapsible trigger="For Students"> 
      <dl> 
        <dt style={qStyle}> Do I get to keep my own robot?</dt>
        <dd style={answerStyle}>Absolutely! Each and every student enrolled in an official Sumo Robot League course will receive their own robot kit. Once they’ve learned to build it, it’s yours to keep forever.</dd>
        <dt style={qStyle}>What if I miss a class?</dt>
        <dd style={answerStyle}>Every student will get a complete copy of the Sumo Robot League Student Handbook, which covers all of the material that you’ll be learning in class. We also have a fully­ digitized version of our course available online so that you can catch up and be ready for your next class.</dd>
      </dl>
      </Collapsible>

       <Collapsible trigger="For Teachers"> 
      <dl> 
        <dt style={qStyle}>How much experience with robotics do I need to have to teach a class?</dt>
        <dd style={answerStyle}>While the ideal teacher has some experience, what really matters is passion and interest. Each teacher will be provided with one copy of the Sumo Robot League Teacher’s Handbook which will go in extreme detail on the topics covered in the course.</dd>

        <dt style={qStyle}>How much programming experience do I need to have to teach a class?</dt>
        <dd style={answerStyle}>The Sumo Robot League Teacher’s Handbook does a great job at covering the information you’ll need to teach the course. Being familiar with programming will enable you to debug student issues, but it’s not required.</dd>

        <dt style={qStyle}>What’s the ideal class size?</dt>
        <dd style={answerStyle}>We’ve found that the ideal size of class is largely determined by the facilities. Each student will need a computer to work on and enough bench space to assemble the Sumo Robot League Mini­Robotics Kit (MRK). It’s also important to have a good ratio of teachers to students. Having one teacher per ten­ to ­fifteen students seem to be the sweet spot.</dd>

        <dt style={qStyle}>What type of equipment do we need for the class?</dt>
        <dd style={answerStyle}>The curriculum is flexible enough to allow you to choose the equipment needs. If you choose to purchase the solder­less Sumo Robot League Mini­Robotics Kit, then all you’ll need is a screwdriver and a computer. Some of our more advanced STEM Classroom Packages come with 3D Printer options and a full set of soldering stations and electronics diagnostics equipment.</dd>

        <dt style={qStyle}>Do you offer teacher training?</dt>
        <dd style={answerStyle}>Yes! We have a fully­ developed “Train the Trainer” course available both online or available at various times and locations throughout the year.</dd>
      </dl>
      </Collapsible>

       <Collapsible trigger="For Parents"> 
      <dl> 
        <dt style={qStyle}>How can I get my child involved if there aren’t any programs at the school?</dt>
        <dd style={answerStyle}>This program relies on family advocates to help us get the curriculum added to your school. We would love to talk to your school’s administration to find out how to proceed. Please contact us (<a href="mailto:schools@sumorobotleague.com">schools@sumorobotleague.com</a>) and we’ll start the process.</dd>

        <dt style={qStyle}>Can my child compete in sanctioned events without having attended a class?</dt>
        <dd style={answerStyle}>Absolutely. Our tournaments are open to everyone that has a robot that meets the competition requirements.</dd>

        <dt style={qStyle}>Do you offer scholarships for families that can’t afford the course?</dt>
        <dd style={answerStyle}>We believe that STEM education is the future and would love to make sure your child is able to to participate. Send us an email at <a href="mailto:scholarships@sumorobotleague.com"> scholarships@sumorobotleague.com </a> and we’ll try and work out the details.</dd>

        <dt style={qStyle}>What if my school isn’t interested?</dt>
        <dd style={answerStyle}>This program was created and developed by volunteers working out of an Augusta, GA makerspace called theClubhou.se. We would love to help you get this program set up in a local makerspace, library, community center, or even your garage; and help provide you with all the information you need (to include our Train the Trainer Course) to get this program up and running for the kids in your area. Please contact us at <a href="mailto:training@sumorobotleague.com"> training@sumorobotleague.com </a> to start the discussion.</dd>
      </dl>
      </Collapsible>

    
     <Collapsible trigger="For Competitors"> 
      <dl> 
        <dt style={qStyle}>Can I compete in sanctioned events without having attended a class?</dt>
        <dd style={answerStyle}>Absolutely. Our events are open to every competitor with a robot that meets the size and weight requirements. Please come and compete!</dd>

        <dt style={qStyle}> What is needed to host a sanctioned event in an area?</dt>
        <dd style={answerStyle}>The only thing that’s really needed is enthusiasm, a ring, and a little bit of marketing skill. If you think you have what it takes, please send an email to <a href="mailto:events@sumorobotleague.com"> events@sumorobotleague.com </a>and we’ll send you the necessary paperwork and help walk you through the process.</dd>
      </dl>
      </Collapsible>
</div> 
   
    );
  }
}

export default Faq;

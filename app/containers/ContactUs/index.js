/*
 *
 * ContactUs
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import BodyContainer from 'components/BodyContainer';
import Footer from 'components/Footer';
import { Input, Button, Textarea } from 'rebass';

const FormWrapper= glamorous.section({
  background: 'rgba(109, 110, 114,.8)',
  width: '65vw',
  padding: '1vw',
  margin: '5vw',
  textAlign: 'center',
})

const TextWrapper = glamorous.section({
  textAlign: 'justify',
  color: 'rgb(19, 77, 163)',
  padding: '1em',
  fontSize: '1.5em',
  margin: '-5vh auto', 
  
})

const HeaderWrapper = glamorous.div({  
  backgroundImage: 'url(http://localhost:8000/img/sumoRobot2017-4.jpg)',
  backgroundSize: 'cover', 
})

export default class ContactUs extends React.PureComponent {
  render() {

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: '0',
  color: '#FAFAFA',
}

const inputStyle = {
  background: '#FAFAFA',
  color: '#303030',
}

const nameField ={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}

const legendStyle = {
  fontSize: '1.15em',
  padding: '5px',
  textAlign: 'left',
  fontFamily: 'Open Sans', 
}

const headerStyle ={
  textAlign: 'center',
  fontWeight: '500',
  fontSize: '2.25em',
  paddingTop: '18vh',
  marginTop: '0',
  height: '50vh',  
  color: '#FAFAFA',
}




    return (
      <div>
        <Helmet title="ContactUs" meta={[ { name: 'description', content: 'Description of ContactUs' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>

        <BodyContainer>
          <div>
            <HeaderWrapper>
             <h2 style={headerStyle}> Have more questions? </h2>
            </HeaderWrapper> 
              <TextWrapper>
                <p> Need more than 20 kits? </p>
                <p> Need a 3D Printer?</p>
                <p> Want to save money and host teacher training at your club or school? </p>
                <p> If you are interested in volume prices or any of the above, please fill out this form: </p>
              </TextWrapper>

              <FormWrapper>
              <form>

                <fieldset style={formStyle}>
                  <legend style={legendStyle}> Name* </legend>
                  <div style={nameField}>
                    <Input type="text" placeholder="First Name" name="" id="firstName" style={inputStyle} />
                    <Input type="text"  placeholder="Last Name" id="lastName"  style={inputStyle}/>
                  </div>

                  <legend style={legendStyle}> Title </legend>
                  <Input type="text" id="title"  style={inputStyle}/>

                  <legend style={legendStyle}>  School/Club </legend>
                  <Input type="text" id="organization"  style={inputStyle}/>

                  <legend style={legendStyle}> Address </legend>
                  <Textarea type="text" id="address"  style={inputStyle}/>

                  <legend style={legendStyle}> City, State & Zip Code </legend>
                  <Input type="text" id="cityStateZip"  style={inputStyle}/>

                  <legend style={legendStyle}> Email* </legend>
                  <Input type="text" id="email"  style={inputStyle}/>

                  <legend style={legendStyle}> Phone Number </legend>
                  <Input type="text" id="phone"  style={inputStyle}/>

                  <legend style={legendStyle}> Number of Students </legend>
                  <Input type="text" id="students"  style={inputStyle}/>

                  <legend style={legendStyle}> Grade Level</legend>
                  <Input type="text" id="grade"  style={inputStyle}/>

                  <legend style={legendStyle}> Any additional info you would like us to know? </legend>
                  <Textarea type="text" id="additionalInfo"  style={inputStyle}/>

                  <legend style={legendStyle}> How did you hear about the Sumo Robot League?   </legend>
                  <Textarea type="text" id="source"  style={inputStyle}/>
                </fieldset>

                <Button backgroundColor="rgba(235, 8, 39, .8)" color="#FAFAFA"> Submit </Button>

              </form>
            </FormWrapper>
          </div>
        </BodyContainer>

        <Footer> </Footer>
      </div>
    );
  }
}

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
  background: 'rgba(48,48,48,.8)',
  width: '60vw',
  padding: '1em',
  margin: '5vw',
  textAlign: 'center',
})

const TextWrapper = glamorous.section({
  textAlign: 'left',
  color: 'rgb(3, 165, 219)',
  padding: '1em',
  fontSize: '1.25em',
  marginLeft: '5vw',
  marginBottom: '-5vh',
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
}

const headerStyle ={
  textAlign: 'center',
  fontWeight: '500',
  fontSize: '2em',
  marginTop: '5vh',
}




    return (
      <div>
        <Helmet title="ContactUs" meta={[ { name: 'description', content: 'Description of ContactUs' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>

        <BodyContainer>
          <div>
            <h2 style={headerStyle}> Have more questions? </h2>

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

                <Button backgroundColor="rgb(210,105,8)" color="#FAFAFA"> Submit </Button>

              </form>
            </FormWrapper>
          </div>
        </BodyContainer>

        <Footer> </Footer>
      </div>
    );
  }
}

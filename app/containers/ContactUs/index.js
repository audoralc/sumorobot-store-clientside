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
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import { Input } from 'rebass';

const FormWrapper= glamorous.section({
  background: 'rgba(48,48,48,.9)',
  width: '60vw',
  padding: '1em',
  margin: '5vw',
})

const BodyContainer= glamorous.div({
  display: 'flex',
  flexDirection: 'row',
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
}

const nameField ={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}
    return (
      <div>
        <Helmet title="ContactUs" meta={[ { name: 'description', content: 'Description of ContactUs' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>

        <BodyContainer>
          <FormWrapper>
            <form>
              <fieldset style={formStyle}>

                <legend> Name* </legend>
                <div style={nameField}>
                  <Input type="text" placeholder="First " name="" id="firstName" style={inputStyle} />
                  <Input type="text"  placeholder="Last Name" label="" name="" id="lastName"  style={inputStyle}/>
                </div>

                <legend > Title </legend>
                <Input type="text"  placeholder="" label="" name="" id="title"  style={inputStyle}/>

                <legend>  School/Club </legend>
                <Input type="text"  placeholder="" label="" name="" id="organization"  style={inputStyle}/>

                <legend > Address </legend>
                <Input type="text"  placeholder="" label="" name="" id="address"  style={inputStyle}/>

                <legend> City, State & Zip Code </legend>
                <Input type="text"  placeholder="" label="" name="" id="cityStateZip"  style={inputStyle}/>

                <legend> Email </legend>
                <Input type="text"  placeholder="" label="" name="" id="email"  style={inputStyle}/>

                <legend> Phone Number </legend>
                <Input type="text"  placeholder="" label="" name="" id="phone"  style={inputStyle}/>

                <legend> Number of Students </legend>
                <Input type="text"  placeholder="" label="" name="" id="students"  style={inputStyle}/>

                <legend> Grade Level</legend>
                <Input type="text"  placeholder="" label="" name="" id="grade"  style={inputStyle}/>

                <legend> Any additional info you would like us to know? </legend>
                <Input type="text"  placeholder="" label="" name="" id="additionalInfo"  style={inputStyle}/>

                <legend> How did you hear about the Sumo Robot League?   </legend>
                <Input type="text"  placeholder="" label="" name="" id="source"  style={inputStyle}/>
              </fieldset>
            </form>
          </FormWrapper>

          <Sidebar> </Sidebar>
        </BodyContainer>
         
        <Footer> </Footer>
      </div>
    );
  }
}

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

const FormWrapper= glamorous.section({
  background: 'rgba(48,48,48,.8)',
  height: '60vh',
  width: '60vw',
  margin: '5vw',
})

export default class ContactUs extends React.PureComponent {
  render() {


    return (
      <div>
        <Helmet title="ContactUs" meta={[ { name: 'description', content: 'Description of ContactUs' }]}/>
        <Header> </Header>
        <Navigation> </Navigation>
        <div>
          <FormWrapper>
            <form>
              <input type="text" name="" id="firstName"/>
              <input type="text" name="" id="lastName"/>
              <input type="text" name="" id="title"/>
              <input type="text" name="" id="schoolClub"/>
              <input type="text" name="" id="address"/>
              <input type="text" name="" id="cityStateZip"/>
              <input type="text" name="" id="email"/>
              <input type="text" name="" id="phone"/>
              <input type="text" name="" id=""/>
              <input type="text" name="" id=""/>
              <input type="text" name="" id=""/>
              <input type="text" name="" id=""/>
            </form>
          </FormWrapper>

          <Sidebar> </Sidebar>
        </div>
        <Footer> </Footer>
      </div>
    );
  }
}

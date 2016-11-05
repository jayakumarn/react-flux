import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import md5 from 'md5';

import TopContent from '../Components/TopContent';
import Contact from '../Components/Contact';
import ContactList from '../Components/ContactList';
import ContactPage from '../Components/ContactPage';

describe('<ContactPage />', () => {
  it('contains an <ContactPage/> component', function () {
    const wrapper = mount(<ContactPage/>);
    expect(wrapper.find(ContactList)).to.have.length(1);
  });

  it('contains an <Contact/> component', function () {
    const wrapper = mount(<ContactPage/>);
    expect(wrapper.find(ContactList)).to.have.length(1);
  });

  it('should have an initial contacts state', function () {
    const wrapper = mount(<ContactPage/>);
    expect(wrapper.state().contacts).to.have.length(6);
  });


  
});
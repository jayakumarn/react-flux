import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import TopContent from '../components/TopContent.jsx';

describe('<TopContent/>', function () {
  it('should have h1 tag', function () {
    const wrapper = shallow(<TopContent/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should have h2 tag', function () {
    const wrapper = shallow(<TopContent/>);
    expect(wrapper.find('h1')).to.be.defined;
    
  });
});
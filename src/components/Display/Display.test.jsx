import React from 'react';
import { shallow } from 'enzyme';
import { Display } from '../../components/Display/Display';


describe('Display component', () => {
  it('renders display object', () => {
    const wrapper = shallow(<Display response={{ test: 1, this: 'string', now: 'please' }}/>);
    expect (wrapper).toMatchSnapshot();
  });

});



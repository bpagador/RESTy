import React from 'react';
import { shallow } from 'enzyme';
import Request from './Request';

describe('Request component', () => {
  let wrapper;
  let handleChange;
  beforeEach(() => {
    handleChange = jest.fn();
    wrapper = shallow(<Request
      url="http://fakeapi.com"
      body="{}"
      method="PATCH"
      onChange={handleChange}
    />);
  });

  it('input value matches url prop', () => {
    expect(wrapper.find('input[name="url"]').prop('value')).toEqual('http://fakeapi.com');
  });

  it('onChange prop is invoked when url changes', () => {
    wrapper.find('input[name="url"]').simulate('change');

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('value set to body prop matches textarea', () => {
    expect(wrapper.find('textarea[name="body"]').prop('value')).toEqual('{}');
  });

  it('onChange prop is invoked when textarea changes', () => {
    wrapper.find('textarea[name="body"]').simulate('change');

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('has a DELETE radio button', () => {
    wrapper.find('textarea[name="body"]').simulate('change');

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('has a checked radio button that matches the method prop', () => {
    expect(wrapper.find('input[name="method"]').findWhere(n => n.prop('checked')).prop('value')).toEqual('PATCH');
  });

  it('onChange prop is invoked when method radio buttons are clicked', () => {
    wrapper.find('input[name="method"]').forEach(radioButton => {
      radioButton.simulate('change');
    });
    
    expect(handleChange).toHaveBeenCalledTimes(4);
  });
});

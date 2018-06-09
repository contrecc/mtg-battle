import React from 'react';
import CardButton from './CardButton';
import { shallow, mount } from 'enzyme';

describe('CardButton', () => {
  let props;

  beforeEach(() => {
    props = {
      roundCompleted: false,
      card: { name: 'Red Wizard' },
      calculate: jest.fn(),
      id: 1
    };
  });

  it('always renders a button', () => {
    const wrapper = mount(<CardButton {...props} />);
    const buttons = wrapper.find('button');

    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should render with props', () => {
    const wrapper = shallow(<CardButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('calls its onClick function when clicked', () => {
    const wrapper = mount(<CardButton {...props} />);
    const buttons = wrapper.find('button');
    buttons.simulate('click');
    expect(props.calculate).toHaveBeenCalled();
  });
});

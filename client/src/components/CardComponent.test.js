import React from 'react';
import CardComponent from './CardComponent';
import Image from 'react-graceful-image';
import { shallow, mount } from 'enzyme';

describe('CardComponent', () => {
  let props;

  beforeEach(() => {
    props = {
      winningCard: 'card1',
      card: { image_uris: { current: 'bluewizard.jpg' } },
      id: 'card1'
    };
  });

  it('renders a div', () => {
    const wrapper = mount(<CardComponent {...props} />);
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('renders with props', () => {
    const wrapper = mount(<CardComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a child component of Image', () => {
    const wrapper = mount(<CardComponent {...props} />);
    expect(wrapper.find(Image).length).toEqual(1);
  });

  it('properly assigns `bg-success` to `bgClass` if card wins', () => {
    const wrapper = shallow(<CardComponent {...props} />);
    const divs = wrapper.find('div').first();
    expect(divs.find('bg-success')).toBeTruthy();
  });

  it('properly assigns `bg-danger` to `bgClass` if card loses', () => {
    props = {
      winningCard: 'card1',
      card: { image_uris: { current: 'bluewizard.jpg' } },
      id: 'card2'
    };
    const wrapper = shallow(<CardComponent {...props} />);
    const divs = wrapper.find('div').first();
    expect(divs.find('bg-danger')).toBeTruthy();
  });

  it('properly assigns `bg-secondary` to `bgClass` if no card wins', () => {
    props = {
      winningCard: '',
      card: { image_uris: { current: 'bluewizard.jpg' } },
      id: 'card2'
    };
    const wrapper = shallow(<CardComponent {...props} />);
    const divs = wrapper.find('div').first();
    expect(divs.find('bg-secondary')).toBeTruthy();
  });
});

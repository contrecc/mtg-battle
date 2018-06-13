import CardButton from './CardButton';

describe('CardButton', () => {
  it('renders correctly', () => {
    const spy = sinon.spy();

    const wrapper = shallow(
      <CardButton
        roundCompleted={false}
        card={{ name: 'Red Wizard' }}
        calculate={spy}
        id={1}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  
  it('always renders a button', () => {
    const spy = sinon.spy();
    
    const wrapper = shallow(
      <CardButton
        roundCompleted={false}
        card={{ name: 'Red Wizard' }}
        calculate={spy}
        id={1}
      />
    );

    const button = wrapper.find('button').first();

    expect(button.length).toEqual(1);
  });  

  it('calls its onClick function when clicked', () => {
    const spy = sinon.spy();

    const wrapper = mount(
      <CardButton
        roundCompleted={false}
        card={{ name: 'Red Wizard' }}
        calculate={spy}
        id={1}
      />
    );

    const button = wrapper
      .find('button')
      .first()
      .simulate('click');

    expect(spy.calledOnce).toBe(true);
  });
});

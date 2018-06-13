import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('./utils/getCards');

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders properly', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toMatchSnapshot();

  const button = wrapper.find('button');
  expect(button.length).toEqual(3);

  const image = wrapper.find('img');
  expect(image.length).toEqual(2);
});

// it('renders a button with an onClick property', () => {
//   //const spy = sinon.spy();

//   const wrapper = mount(<App />);
//   const button = wrapper.find('button').first();
//   //button.props.onClick = spy;
//   //console.log(button.props());
//   button.simulate('click');
//   expect(button.props.onClick).toHaveBeenCalled();
// });

it('fetches cards and renders them on mount', done => {
  const wrapper = shallow(<App />);

  setTimeout(() => {
    wrapper.update();

    const state = wrapper.instance().state;
    expect(state.card1.name).toEqual('Shoreline Ranger');
    expect(state.card2.name).toEqual('Darigaaz Reincarnated');

    //expect(wrapper.find('CardComponent').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  done();
});

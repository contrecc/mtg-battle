import CardComponent from './CardComponent';
import Image from 'react-graceful-image';

describe('CardComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CardComponent
        winningCard="card1"
        card={{ image_uris: { current: 'bluewizard.jpg' } }}
        id="card1"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a div', () => {
    const wrapper = shallow(
      <CardComponent
        winningCard="card1"
        card={{ image_uris: { current: 'bluewizard.jpg' } }}
        id="card1"
      />
    );
    const div = wrapper.find('div').first();
    expect(div.length).toBeGreaterThan(0);
  });

  it('renders a child component of Image', () => {
    const wrapper = shallow(
      <CardComponent
        winningCard="card1"
        card={{ image_uris: { current: 'bluewizard.jpg' } }}
        id="card1"
      />
    );
    const imageComponent = wrapper.find(Image);
    expect(imageComponent.length).toEqual(1);
  });

  it('properly assigns `bg-success` to `bgClass` if card wins', () => {
    const wrapper = shallow(
      <CardComponent
        winningCard="card1"
        card={{ image_uris: { current: 'bluewizard.jpg' } }}
        id="card1"
      />
    );
    const div = wrapper.find('div').first();
    expect(div.find('bg-success')).toBeTruthy();
  });

  it('properly assigns `bg-danger` to `bgClass` if card loses', () => {
    const wrapper = shallow(
      <CardComponent
        winningCard="card1"
        card={{ image_uris: { current: 'bluewizard.jpg' } }}
        id="card2"
      />
    );
    const div = wrapper.find('div').first();
    expect(div.find('bg-danger')).toBeTruthy();
  });

  it('properly assigns `bg-secondary` to `bgClass` if no card wins', () => {
    const wrapper = shallow(
      <CardComponent
        winningCard=""
        card={{ image_uris: { current: 'bluewizard.jpg' } }}
        id="card2"
      />
    );
    const div = wrapper.find('div').first();
    expect(div.find('bg-secondary')).toBeTruthy();
  });
});

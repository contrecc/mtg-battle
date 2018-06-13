import WinStreak from './WinStreak';

describe('WinStreak', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WinStreak />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const sentProps = 1;
    const wrapper = mount(<WinStreak winStreak={sentProps} />);
    const h2 = wrapper.find('h2');
    expect(h2.text()).toEqual(`Win Streak: ${sentProps}`);
  });
});

import InfoSection from './InfoSection';

describe('InfoSection', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper).toMatchSnapshot();
  });
});

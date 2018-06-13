import ResultsAlert from './ResultsAlert';

describe('ResultsAlert', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ResultsAlert winner={true} bothStrong={false} bothWeak={false} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct text when user wins', () => {
    const wrapper = mount(
      <ResultsAlert winner={true} bothStrong={false} bothWeak={false} />
    );

    const div = wrapper.find('div');
    expect(div.hasClass('alert-success')).toBe(true);

    const text = div.text();
    expect(text).toEqual(
      'You chose correctly! Your creature demolished the other! Booyah!'
    );
  });

  it('renders the correct text when user loses', () => {
    const wrapper = mount(
      <ResultsAlert winner={false} bothStrong={false} bothWeak={false} />
    );

    const div = wrapper.find('div');
    expect(div.hasClass('alert-danger')).toBe(true);

    const text = div.text();
    expect(text).toEqual('Ouch! Your creature got crushed!');
  });

  it('renders the correct text both creatures are strong', () => {
    const wrapper = mount(
      <ResultsAlert winner={false} bothStrong={true} bothWeak={false} />
    );

    const div = wrapper.find('div');
    expect(div.hasClass('alert-secondary')).toBe(true);
    const text = div.text();

    expect(text).toEqual(
      "You tied! Both creatures perish in brutal fashion, so we'll give you the point!"
    );
  });

  it('renders the correct text both creatures are weak', () => {
    const wrapper = mount(
      <ResultsAlert winner={false} bothStrong={false} bothWeak={true} />
    );

    const div = wrapper.find('div');
    expect(div.hasClass('alert-secondary')).toBe(true);

    const text = div.text();
    expect(text).toEqual(
      "You tied! Both creatures are too weak to defeat the other, so we'll give you the point!"
    );
  });
});

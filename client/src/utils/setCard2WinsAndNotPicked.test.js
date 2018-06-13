import setCard2WinsAndNotPicked from './setCard2WinsAndNotPicked';

describe('setCard2WinsAndNotPicked', () => {
  it('should return a function', () => {
    expect(setCard2WinsAndNotPicked()).toMatchSnapshot();
  });

  it('should return a function that then updates the state', () => {
    const returnedFunction = setCard2WinsAndNotPicked();
    expect(returnedFunction({}, {})).toMatchSnapshot();
  });
});

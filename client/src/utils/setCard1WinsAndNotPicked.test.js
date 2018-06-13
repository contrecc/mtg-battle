import setCard1WinsAndNotPicked from './setCard1WinsAndNotPicked';

describe('setCard1WinsAndNotPicked', () => {
  it('should return a function', () => {
    expect(setCard1WinsAndNotPicked()).toMatchSnapshot();
  });

  it('should return a function that then updates the state', () => {
    const returnedFunction = setCard1WinsAndNotPicked();
    expect(returnedFunction({}, {})).toMatchSnapshot();
  });
});

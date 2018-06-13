import setCard1WinsAndPicked from './setCard1WinsAndPicked';

describe('setCard1WinsAndPicked', () => {
  it('should return a function', () => {
    expect(setCard1WinsAndPicked()).toMatchSnapshot();
  });

  it('should return a function that then updates the state', () => {
    const returnedFunction = setCard1WinsAndPicked();
    expect(returnedFunction({winStreak: 1}, {})).toMatchSnapshot();
  });
});

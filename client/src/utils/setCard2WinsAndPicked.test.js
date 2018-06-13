import setCard2WinsAndPicked from './setCard2WinsAndPicked';

describe('setCard2WinsAndPicked', () => {
  it('should return a function', () => {
    expect(setCard2WinsAndPicked()).toMatchSnapshot();
  });

  it('should return a function that then updates the state', () => {
    const returnedFunction = setCard2WinsAndPicked();
    expect(returnedFunction({ winStreak: 1 }, {})).toMatchSnapshot();
  });
});

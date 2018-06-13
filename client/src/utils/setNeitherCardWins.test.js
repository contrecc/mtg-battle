import setNeitherCardWins from './setNeitherCardWins';

describe('setNeitherCardWins', () => {
  it('should return a function', () => {
    expect(setNeitherCardWins()).toMatchSnapshot();
  });

  it('should return a function that then updates the state', () => {
    const returnedFunction = setNeitherCardWins();
    expect(returnedFunction({ winStreak: 1 }, {})).toMatchSnapshot();
  });
});

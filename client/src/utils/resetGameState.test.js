import resetGameState from './resetGameState';

describe('resetGameState', () => {
  it('should return the updated state', () => {
    expect(resetGameState({}, {})).toMatchSnapshot();
  });
});

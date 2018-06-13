import setBothCardsWin from './setBothCardsWin';

describe('setBothCardsWin', () => {
  it('should return a function', () => {
    expect(setBothCardsWin()).toMatchSnapshot();
  });

  it('should return a function that then updates the state', () => {
    const returnedFunction = setBothCardsWin();
    expect(returnedFunction({}, {})).toMatchSnapshot();
  });
});

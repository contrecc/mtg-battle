export default function setCard1WinsAndPicked(pickedCard) {
  return function(state, props) {
    return {
      winner: true,
      winStreak: this.state.winStreak + 1,
      winningCard: 'card1',
      roundCompleted: true,
      pickedCard: pickedCard
    };
  };
}

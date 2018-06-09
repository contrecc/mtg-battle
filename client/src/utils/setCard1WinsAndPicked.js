export default function setCard1WinsAndPicked() {
  return function(state, props) {
    return {
      winner: true,
      winStreak: this.state.winStreak + 1,
      winningCard: 'card1',
      roundCompleted: true
    };
  };
}

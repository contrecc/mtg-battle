export default function setCard2WinsAndPicked() {
  return function(state, props) {
    return {
      winner: true,
      winStreak: this.state.winStreak + 1,
      winningCard: 'card2',
      roundCompleted: true
    };
  };
}

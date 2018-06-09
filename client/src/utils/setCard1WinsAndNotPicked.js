export default function setCard1WinsAndNotPicked() {
  return function(state, props) {
    return {
      winner: false,
      winStreak: 0,
      winningCard: 'card1',
      roundCompleted: true
    };
  };
}

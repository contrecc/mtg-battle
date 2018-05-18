export default function setCard2WinsAndNotPicked(pickedCard) {
  return function(state, props) {
    return {
      winner: false,
      winStreak: 0,
      winningCard: 'card2',
      roundCompleted: true,
      pickedCard: pickedCard
    };
  };
}

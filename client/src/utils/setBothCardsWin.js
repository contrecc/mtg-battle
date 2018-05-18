export default function setBothCardsWin(pickedCard) {
  return function(state, props) {
    return {
      bothStrong: true,
      winStreak: state.winStreak + 1,
      winningCard: '',
      winner: false,
      roundCompleted: true,
      pickedCard: pickedCard
    };
  };
}

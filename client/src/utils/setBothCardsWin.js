export default function setBothCardsWin() {
  return function(state, props) {
    return {
      bothStrong: true,
      winStreak: state.winStreak + 1,
      winningCard: '',
      winner: false,
      roundCompleted: true
    };
  };
}

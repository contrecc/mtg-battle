export default function setNeitherCardWins() {
  return function(state, props) {
    return {
      bothWeak: true,
      winStreak: state.winStreak + 1,
      winningCard: '',
      winner: false,
      roundCompleted: true
    };
  };
}

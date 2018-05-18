export default function resetGameState(state, props) {
  return {
    bothStrong: false,
    bothWeak: false,
    winner: false,
    winningCard: '',
    roundCompleted: false,
    pickedCard: ''
  };
}

import React from 'react';

export default props => {
  const { winStreak } = props;
  return (
    <div>
      <h2 className="text-info" style={{ marginBottom: '40px' }}>
        Win Streak: {winStreak}
      </h2>
    </div>
  );
};

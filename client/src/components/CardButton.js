import React from 'react';
import { Button } from 'reactstrap';

export default props => {
  const { roundCompleted, card, calculate, id } = props;

  return (
    <Button id={id} className="btn-lg" disabled={roundCompleted} onClick={calculate}>
      {card.name}
    </Button>
  );
};

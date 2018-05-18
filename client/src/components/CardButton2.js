import React from 'react';
import { Button } from 'reactstrap';

export default props => {
  const { roundCompleted, card, calculate } = props;

  return (
    <Button id="btnCard2" className="btn-lg" disabled={roundCompleted} onClick={calculate}>
      {card.name}
    </Button>
  );
};

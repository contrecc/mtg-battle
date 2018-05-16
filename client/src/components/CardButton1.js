import React from 'react';
import classnames from 'classnames';
import { Button } from 'reactstrap';

export default props => {
  const { roundCompleted, card } = props;
  const classes = classnames({
    'btn-lg': true,
    disabled: roundCompleted
  });

  return (
    <Button id="btnCard1" className={classes}>
      {card.name}
    </Button>
  );
};

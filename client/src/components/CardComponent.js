import React from 'react';
import { Card, CardImg } from 'reactstrap';

export default props => {
  const { winner, winningCard, card, id } = props;
  let bgClass;

  if (winner) {
    if (winningCard === id) {
     bgClass = 'bg-success';
    } else {
     bgClass = 'bg-danger';
    }
  } else {
    bgClass = 'bg-secondary';
  }

  return (
    <Card className={bgClass} style={{ padding: '20px', marginBottom: '30px' }}>
      <CardImg
        top
        width="100%"
        src={card.image_uris.current}
        alt="card image"
      />
    </Card>
  );
};

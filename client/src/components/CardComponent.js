import React from 'react';
import { Card, CardImg } from 'reactstrap';

export default props => {
  const { winningCard, card, id, pickedCard } = props;
  let bgClass;

  if (winningCard) {
    if(winningCard === pickedCard && winningCard === id) {
      bgClass = 'bg-success';
    }
    if(winningCard === pickedCard && winningCard !== id) {
      bgClass = 'bg-danger';
    }
    if(winningCard !== pickedCard && winningCard !== id) {
      bgClass = 'bg-danger';
    }
    if(winningCard !== pickedCard && winningCard === id) {
      bgClass = 'bg-success';
    }
  }

  if (!winningCard) {
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

import React from 'react';
import { Card } from 'reactstrap';
import Image from 'react-graceful-image';

export default props => {
  const { winningCard, card, id, pickedCard } = props;
  let bgClass;

  if (winningCard) {
    if (winningCard === pickedCard && winningCard === id) {
      bgClass = 'bg-success';
    }
    if (winningCard === pickedCard && winningCard !== id) {
      bgClass = 'bg-danger';
    }
    if (winningCard !== pickedCard && winningCard !== id) {
      bgClass = 'bg-danger';
    }
    if (winningCard !== pickedCard && winningCard === id) {
      bgClass = 'bg-success';
    }
  }

  if (!winningCard) {
    bgClass = 'bg-secondary';
  }

  return (
    <Card className={bgClass} style={{ padding: '20px', marginBottom: '30px'}}>
      <Image
        src={card.image_uris.current}
        width="100%"
        alt="card image"
        retry={{ count: 10, delay: 2 }}
        placeholderColor="#6c757d"
        
      />
    </Card>
  );
};


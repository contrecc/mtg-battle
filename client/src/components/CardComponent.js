import React from 'react';
import { Card, CardImg } from 'reactstrap';

export default props => {
  const { winner, winningCard, card, id, pickedCard } = props;
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



  // if (winner) {
  //   if (winningCard === pickedCard && winningCard === id) {
  //     bgClass = 'bg-success';
  //   } else {
  //     bgClass = 'bg-danger';
  //   }
  // }

  // if (!winner) {
  //   if (winningCard) {
  //     if(winningCard !== pickedCard && ) {
  //     bgClass = 'bg-danger';
  //   } else if (winningCard && winningCard === pickedCard) {
  //     bgClass = 'bg-secondary';
  //   } else if (!winningCard) {
  //     bgClass = 'bg-secondary';
  //   }
  //}

  // if (winner && winningCard === pickedCard) {
  //   bgClass = 'bg-success';
  // } else if (winner && winningCard !== pickedCard) {
  //   bgClass = 'bg-danger';
  // } else if (!winner && winningCard === pickedCard) {
  //   bgClass = 'bg-secondary';
  // } else if (!winner && winningCard !== pickedCard) {
  //   bgClass = 'bg-danger';
  // } else {
  //   bgClass = 'bg-secondary';
  // }

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

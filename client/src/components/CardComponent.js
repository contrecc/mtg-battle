import React from 'react';
import { Card } from 'reactstrap';
import Image from 'react-graceful-image';

export default props => {
  const { winningCard, card, id } = props;
  let bgClass;

  if (winningCard) {
    if (winningCard === id) {
      bgClass = 'bg-success';
    } else {
      bgClass = 'bg-danger';
    }
  } else {
    bgClass = 'bg-secondary';
  }

  return (
    <Card className={bgClass} style={{ padding: '20px', maxWidth: '350px', marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '30px'}} >
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
import React from 'react'
import { Alert } from 'reactstrap';

export default (props) => {
  const { winner, bothStrong, bothWeak } = props;
  let text = '';
  let color = '';

  if(bothStrong) {
    text = "You tied! Both creatures perish in brutal fashion, so we'll give you the point!";
    color = "secondary";
  } else if(winner) {
    text = "You chose correctly! Your creature demolished the other! Booyah!";
    color = "success";
  } else if(!winner) {
    text = "Ouch! Your creature got crushed!";
    color = "danger";
  } else if(bothWeak){
    text = "You tied! Both creatures are too weak to defeat the other, so we'll give you the point!";
    color = "secondary";
  }

  return (
    <Alert color={color}>
      {text}
      </Alert>
  )
}
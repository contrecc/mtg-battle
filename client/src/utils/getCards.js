import fetch from 'node-fetch';

export default function getCards() {
  return fetch('/cards')
      .then(response => response.json())
      .catch(error => console.log(error));
}
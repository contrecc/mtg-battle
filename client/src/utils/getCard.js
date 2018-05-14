import fetch from 'node-fetch';

function getCard(cardNum) {
  fetch('/card')
      .then(response => response.json())
      .then(json =>
        this.setState({
          cardNum: {
            image_uris: {
              art_crop: json.image_uris.art_crop,
              border_crop: json.image_uris.border_crop,
              large: json.image_uris.large,
              normal: json.image_uris.normal,
              png: json.image_uris.png,
              small: json.image_uris.small
            },
            name: json.name,
            power: json.power,
            toughness: json.toughness
          }
        })
      )
      .catch(error => console.log(error));
  }

  
  
  
  // try {
  //   const response = await fetch('/card');
  //   const json = await response.json();
  //   let newCardObj = {
  //     image_uris: {
  //       art_crop: json.image_uris.art_crop,
  //       border_crop: json.image_uris.border_crop,
  //       large: json.image_uris.large,
  //       normal: json.image_uris.normal,
  //       png: json.image_uris.png,
  //       small: json.image_uris.small
  //     },
  //     name: json.name,
  //     power: json.power,
  //     toughness: json.toughness
  //   };

  //   this.setState({
  //         card1: newCardObj
  //       });

  //   // console.log(this.state);

  //   //return newCardObj;
  // } catch (error) {
  //   console.log(error);
  // }

  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(data) {
  //   console.log('The data returned is', data);
  //   let newCardObj = {
  //     image_uris: {
  //       art_crop: data.image_uris.art_crop,
  //       border_crop: data.image_uris.border_crop,
  //       large: data.image_uris.large,
  //       normal: data.image_uris.normal,
  //       png: data.image_uris.png,
  //       small: data.image_uris.small
  //     },
  //     name: data.name,
  //     power: data.power,
  //     toughness: data.toughness
  //   };
  //   console.log("The newCardObj is", newCardObj);
  //   return newCardObj;
  // })
  // .catch(function(error) {
  //   console.log(error);
  // });
// };

export default getCard;

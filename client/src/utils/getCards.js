import fetch from 'node-fetch';

export default function getCards() {
  return fetch('/twocards')
      .then(response => response.json())
      // .then(function(json) {
      //   this.setState({
      //     card1: {
      //       image_uris: {
      //         art_crop: json[0].image_uris.art_crop,
      //         normal: json[0].image_uris.normal,
      //         current: json[0].image_uris.art_crop
      //       },
      //       name: json[0].name,
      //       power: Number(json[0].power),
      //       toughness: Number(json[0].toughness)
      //     },
      //     card2: {
      //       image_uris: {
      //         art_crop: json[1].image_uris.art_crop,
      //         normal: json[1].image_uris.normal,
      //         current: json[1].image_uris.art_crop
      //       },
      //       name: json[1].name,
      //       power: Number(json[1].power),
      //       toughness: Number(json[1].toughness)
      //     },
      //   })    
      // })
      .catch(error => console.log(error));
}
  //     .then(json =>
  //       this.setState({
  //         cardNum: {
  //           image_uris: {
  //             art_crop: json.image_uris.art_crop,
  //             border_crop: json.image_uris.border_crop,
  //             large: json.image_uris.large,
  //             normal: json.image_uris.normal,
  //             png: json.image_uris.png,
  //             small: json.image_uris.small
  //           },
  //           name: json.name,
  //           power: json.power,
  //           toughness: json.toughness
  //         }
  //       })
  //     )
  //     .catch(error => console.log(error));
  // }

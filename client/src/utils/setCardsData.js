export default function setCardsData(json) {
  return function(state, props) {
    return {
      card1: {
        image_uris: {
          art_crop: json[0].image_uris.art_crop,
          normal: json[0].image_uris.normal,
          current: json[0].image_uris.art_crop
        },
        name: json[0].name,
        power: Number(json[0].power),
        toughness: Number(json[0].toughness)
      },
      card2: {
        image_uris: {
          art_crop: json[1].image_uris.art_crop,
          normal: json[1].image_uris.normal,
          current: json[1].image_uris.art_crop
        },
        name: json[1].name,
        power: Number(json[1].power),
        toughness: Number(json[1].toughness)
      }
    };
  };
}

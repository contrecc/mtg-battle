const fakeData = [
  {
    image_uris: {
      art_crop: "https://img.scryfall.com/cards/art_crop/en/a25/72.jpg?1521725841", 
      border_crop: "https://img.scryfall.com/cards/border_crop/en/a25/72.jpg?1521725841", 
      large: "https://img.scryfall.com/cards/large/en/a25/72.jpg?1521725841", 
      normal: "https://img.scryfall.com/cards/normal/en/a25/72.jpg?1521725841", 
      png: "https://img.scryfall.com/cards/png/en/a25/72.png?1521725841", 
      small: "https://img.scryfall.com/cards/small/en/a25/72.jpg?1521725841"
    },
    name: "Shoreline Ranger",
    power: "3",
    toughness: "4"
  },
  {
    image_uris: {
      art_crop: "https://img.scryfall.com/cards/art_crop/en/dom/193.jpg?1524791933",
      border_crop: "https://img.scryfall.com/cards/border_crop/en/dom/193.jpg?1524791933",
      large: "https://img.scryfall.com/cards/large/en/dom/193.jpg?1524791933",
      normal: "https://img.scryfall.com/cards/normal/en/dom/193.jpg?1524791933",
      png: "https://img.scryfall.com/cards/png/en/dom/193.png?1524791933",
      small: "https://img.scryfall.com/cards/small/en/dom/193.jpg?1524791933"
    },
    name: "Darigaaz Reincarnated",
    power: "7",
    toughness: "7"
  }
];

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData);
  });
};
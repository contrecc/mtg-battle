import setCardsData from './setCardsData';

describe('setCardsData', () => {
  const jsonData = [
    {
      image_uris: {
        art_crop:
          'https://img.scryfall.com/cards/art_crop/en/ima/193.jpg?1517813031',
        current:
          'https://img.scryfall.com/cards/art_crop/en/ima/193.jpg?1517813031',
        normal:
          'https://img.scryfall.com/cards/normal/en/ima/193.jpg?1517813031'
      },
      name: 'Bladewing the Risen',
      power: 4,
      toughness: 4
    },
    {
      image_uris: {
        art_crop:
          'https://img.scryfall.com/cards/art_crop/en/rix/172.jpg?1524752439',
        current:
          'https://img.scryfall.com/cards/art_crop/en/rix/172.jpg?1524752439',
        normal:
          'https://img.scryfall.com/cards/normal/en/rix/172.jpg?1524752439'
      },
      name: 'Storm Fleet Sprinter',
      power: 2,
      toughness: 2
    }
  ];

  it('should return a function', () => {
    expect(setCardsData(jsonData)).toMatchSnapshot();
  });

  it('should return a function that then updates the state', () => {
    const returnedFunction = setCardsData(jsonData);
    expect(returnedFunction({}, {})).toMatchSnapshot();
  });
});

import { Language, Place } from './models';

export const _places: Place[] = [
  {
    name: 'Barcelona',
    objects: [
      { name: 'SAGRADA FAMILIA', image: '' },
      { name: 'PARK GÜELL', image: '' },
      { name: 'Casa Batllo', image: '' },
      { name: 'LA RAMBLA', image: '' },
      { name: 'PARK CIUTADELLA', image: '' },
      { name: 'CAMP NOU', image: '' },
    ],
  },
  {
    name: 'Paryż',
    objects: [
      { name: 'Wieża Eiffla', image: '' },
      { name: 'Luwr', image: '' },
      { name: 'Katedra Notre Dame', image: '' },
      { name: 'Łuk Triumfalny', image: '' },
      { name: 'Bazylika Sacre-Coeur', image: '' },
      { name: 'Centrum Pompidou', image: '' },
    ],
  },
  {
    name: 'Warszawa',
    objects: [
      { name: 'Pałac Kultury i Nauki', image: '' },
      { name: 'Łazienki Królewskie', image: '' },
      { name: 'Muzeum Powstania Warszawskiego', image: '' },
      { name: 'Centrum Nauki Kopernik', image: '' },
      { name: 'Stare Miasto', image: '' },
      { name: 'Trakt Królewski i Kolumna Zygmunta', image: '' },
    ],
  },
];

export const _languages: Language[] = [
  { name: 'polski', icon: '' },
  { name: 'angielski', icon: '' },
  { name: 'francuski', icon: '' },
];

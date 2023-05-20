import { Language, Place } from './models';

import sagradaFamilia from './assets/places/sagrada-familia.jpg';
import parkGuell from './assets/places/park-guell.jpg';
import casaBatllo from './assets/places/casa-batllo.jpg';
import laRambla from './assets/places/la-rambla.jpg';
import parkCiutadella from './assets/places/park-ciutadella.jpg';
import campNou from './assets/places/camp-nou.jpg';

import wiezaEiffla from './assets/places/wieza-eiffla.jpg';
import luwr from './assets/places/luwr.jpg';
import katedraNorte from './assets/places/katedra-notre-dame.jpg';
import lukTriumfalny from './assets/places/luk-triumfalny.jpg';
import bazylikaSacre from './assets/places/bazylika-sacre-coeur.jpg';
import centrumPompidou from './assets/places/centrum-pompidou.jpg';

import palacKultury from './assets/places/palac-kultury-i-nauki.jpg';
import lazienkiKrolewskie from './assets/places/lazienki-krolewskie.jpg';
import muzeumPowstania from './assets/places/muzeum-powstania-warszawskiego.jpg';
import centrumNauki from './assets/places/centrum-nauki-kopernik.jpg';
import stareMiasto from './assets/places/stare-miasto.jpg';
import traktKrolewski from './assets/places/trakt-krolewski-i-kolumna-zygmunta.jpg';

export const _places: Place[] = [
  {
    name: 'Barcelona',
    objects: [
      { name: 'Sagrada Familia', image: sagradaFamilia },
      { name: 'Park Güell', image: parkGuell },
      { name: 'Casa Bat§llo', image: casaBatllo },
      { name: 'La Rambla', image: laRambla },
      { name: 'Park Ciutadella', image: parkCiutadella },
      { name: 'Camp Nou', image: campNou },
    ],
  },
  {
    name: 'Paryż',
    objects: [
      { name: 'Wieża Eiffla', image: wiezaEiffla },
      { name: 'Luwr', image: luwr },
      { name: 'Katedra Notre Dame', image: katedraNorte },
      { name: 'Łuk Triumfalny', image: lukTriumfalny },
      { name: 'Bazylika Sacre-Coeur', image: bazylikaSacre },
      { name: 'Centrum Pompidou', image: centrumPompidou },
    ],
  },
  {
    name: 'Warszawa',
    objects: [
      { name: 'Pałac Kultury i Nauki', image: palacKultury },
      { name: 'Łazienki Królewskie', image: lazienkiKrolewskie },
      { name: 'Muzeum Powstania Warszawskiego', image: muzeumPowstania },
      { name: 'Centrum Nauki Kopernik', image: centrumNauki },
      { name: 'Stare Miasto', image: stareMiasto },
      { name: 'Trakt Królewski i Kolumna Zygmunta', image: traktKrolewski },
    ],
  },
];

export const _languages: Language[] = [
  { name: 'polski', icon: '' },
  { name: 'angielski', icon: '' },
  { name: 'francuski', icon: '' },
];

import { Guider, Language, Place } from './models';

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

import avatar1 from './assets/avatars/1.jpeg';
import avatar2 from './assets/avatars/2.jpeg';
import avatar3 from './assets/avatars/3.jpeg';

import englandFlag from './assets/flags/england.svg';
import franceFlag from './assets/flags/france.svg';
import polandFlag from './assets/flags/poland.svg';

import relation1 from './assets/relations/1.jpg';
import relation2 from './assets/relations/2.jpg';
import relation3 from './assets/relations/3.jpg';

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
  { name: 'polski', icon: polandFlag },
  { name: 'angielski', icon: englandFlag },
  { name: 'francuski', icon: franceFlag },
];

export const _guiders: Guider[] = [
  {
    id: 1,
    name: 'Adam',
    surname: 'Niewiadomski',
    age: 70,
    avatar: avatar1,
    country: 'Polska',
    languages: [_languages[0]],
    place: _places[2],
    sex: 'M',
    description:
      'Witam! Jestem zafascynowany od dawien dawna historią. Mieszkam od kilkudziesięciu lat w Warszawie, a dzięki temu znam wszystkie najciekawsze historyczne miejsca! Zawsze z miłą chęcią dziele się moją wiedzą. Jeśli tylko napiszesz mi kilka rzeczy, które Cię interesują od razu będę wiedzieć gdzie Cię zabrać, więc jeśli Cię to interesuje napisz do mnie!',
    interests: ['kino', 'teatr', 'piłka nożna', 'historia'],
    skills: [
      {
        name: 'Znajomość miast',
        up: 27,
        down: 3,
      },
    ],
    relations: [
      { type: 'image', cover: relation1 },
      { type: 'video', cover: relation2 },
      { type: 'image', cover: relation3 },
    ],
  },
  {
    id: 2,
    name: 'John',
    surname: 'Clain',
    age: 45,
    avatar: avatar2,
    country: 'USA',
    languages: [_languages[1], _languages[0]],
    place: _places[0],
    sex: 'M',
    description:
      'Siemka, nazywam John od małego dziecka uwielbiałem sztukę – a w moim mieście jest jej naprawdę sporo do zobaczenia. Mógłbym Ci ją z chęcią pokazać, natomiast jeśli nie interesuje Cię to, a uwielbiasz piłkę nożną również się dobrze składa – gram w piłkę od dziecka, a historię lokalnych klubów znam doskonale! Napisz do mnie, na pewno się dogadamy!',
    interests: ['kino', 'teatr', 'piłka nożna', 'historia'],
    skills: [
      {
        name: 'Znajomość miast',
        up: 27,
        down: 3,
      },
    ],
    relations: [
      { type: 'image', cover: relation1 },
      { type: 'video', cover: relation2 },
      { type: 'image', cover: relation3 },
    ],
  },
  {
    id: 3,
    name: 'Greta',
    surname: 'Martinez',
    age: 18,
    avatar: avatar3,
    country: 'Francja',
    languages: [_languages[1], _languages[2], _languages[0]],
    place: _places[1],
    sex: 'K',
    description:
      'Cześć, od dziecka mieszkam we Paryżu, ale świetnie mówię po Polsku, bo moja mama jest Polką. Z chęcią pokażę Ci tutejsze atrakcje, uwielbiam opowiadać o nich ludziom oraz doskonale wiem w jakich godzinach do nich się udać, aby nie były to godziny szczytu! Do zobaczenia! <3',
    interests: ['kino', 'teatr', 'piłka nożna', 'historia'],
    skills: [
      {
        name: 'Znajomość miast',
        up: 27,
        down: 3,
      },
    ],
    relations: [
      { type: 'image', cover: relation1 },
      { type: 'video', cover: relation2 },
      { type: 'image', cover: relation3 },
    ],
  },
];

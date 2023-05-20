export interface Place {
  name: string;
  objects: PlaceObject[];
}

export interface PlaceObject {
  name: string;
  image: string;
}

export interface Language {
  name: string;
  icon: string;
}

export interface Guider {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  country: string;
  place: Place;
  languages: Language[];
  age: number;
  sex: string;
  description: string;
  interests: string[];
  skills: GuiderSkill[];
  relations: GuiderRelation[];
}

export interface GuiderSkill {
  name: string;
  up: number;
  down: number;
}

export interface GuiderRelation {
  type: 'image' | 'video';
  cover: string;
}

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

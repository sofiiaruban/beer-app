export default interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: {
      temp: {
        value: number;
        unit: string;
      };
      duration: number;
    }[];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: null | string;
  };
  ingredients: {
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    hops: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: string;
    }[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
export default interface HomeProps {
  beers?: Beer[];
  fetchData: (url: string) => Promise<Beer[]>;
}
export default interface BeerCardProps {
  id: number;
  name: string;
  img: string;
  tagline: string;
  brewedIn: string;
  pH: number;
  alcByVol: number;
}

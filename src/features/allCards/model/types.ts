type Category = {
    id: number;
    name: string;
  };
  type CatBreedNumberTypes =
  | 'adaptability'
  | 'affection_level'
  | 'child_friendly'
  | 'dog_friendly'
  | 'energy_level'
  | 'grooming'
  | 'health_issues'
  | 'intelligence'
  | 'shedding_level'
  | 'social_needs'
  | 'stranger_friendly'
  | 'vocalisation'
  | 'indoor'
  | 'lap'
  | 'experimental'
  | 'hairless'
  | 'natural'
  | 'rare'
  | 'rex'
  | 'suppressed_tail'
  | 'short_legs'
  | 'hypoallergenic';

type CatBreedBase = {
  id: string;
  name: string;
  weight: {
    imperial: string;
    metric: string;
  };
  vetstreet_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  reference_image_id: string;
};

type CatBreed = CatBreedBase & {
  [key in CatBreedNumberTypes]: number;
};

type Favourite = {
  id:number;
  
}
export type CatImage = {
    breeds: CatBreed[] | []; 
    categories?: Category[]; 
    id: string; 
    url: string;
    favourite?: Favourite
    width: number;
    height: number;
  };

export type FavouriteCatResponse = {
    id: number;
    message:string
  };
export type DislikeType = Omit<FavouriteCatResponse, 'id'>
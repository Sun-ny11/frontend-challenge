import { Nullable } from "../../../common/types";

export type FavouriteCatResponse = {
    id: number;
    message:string
  };

export type DislikeType = Omit<FavouriteCatResponse, 'id'>

export type FetchCats = {
  page:number 
  userId?:Nullable<string> 
  signal?:AbortSignal 
  limit?:number
  order?:string 
}
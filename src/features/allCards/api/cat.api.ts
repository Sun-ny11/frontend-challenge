import { AxiosInstance, AxiosResponse } from "axios"
import { Endpoints } from "./cat.endpoints"
import { instance } from "../../../common/api/instance"
import { CatImage } from "../model/types"
import { DislikeType, FavouriteCatResponse } from "./cat.api.types"
import { Nullable } from "../../../common/types"

class CatApi {
    constructor(private instance: AxiosInstance) {}

    public async fetchCat(page:number = 0, userId?:Nullable<string>,signal?:AbortSignal, limit:number = 15, order:string = "DESC"): Promise<CatImage[]> {
      const res:AxiosResponse<CatImage[]> = await this.instance.get(Endpoints.fetchCats,{
        params: {
          page,
          limit,
          order,
          sub_id: userId
        }, 
        signal
      })

      return res.data
    }
    public async likeCat(catId:string, userId:Nullable<string>): Promise<FavouriteCatResponse> {
      const res:AxiosResponse<FavouriteCatResponse> = await this.instance.post(Endpoints.favouriteCats,{       
          image_id: catId,
          sub_id: userId,
      })
      return res.data
    }
    public async dislikeCat(favouriteId:number): Promise<DislikeType> {
      const res:AxiosResponse<DislikeType> = await this.instance.delete(Endpoints.favouriteCats + `/${favouriteId}`)
      return res.data

    }

}

export const catApi = new CatApi(instance)
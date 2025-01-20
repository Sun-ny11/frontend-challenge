import { create } from 'zustand'
import { catApi } from '../api/cat.api'
import { CatImage } from './types'
import { responseErrorHandler } from '../../../common/utils/responseErrorHandler'
import { favoriteStore } from '../../favoriteCards/model/favoritesStore'


type CatStore = {
    cats:CatImage[] | []
    loading:boolean
    pageCount:number
    fetchCats:()=>Promise<void>
    toggleLikeCats:(catId:string)=>Promise<void>
}
export const useCats = create<CatStore>((set,get) => ({
    cats:  [],
    loading:false,
    pageCount:0,
    fetchCats: async () => {
      set({ loading:true })

      try{
        const cats = await catApi.fetchCat(get().pageCount)

        set({pageCount: get().pageCount + 1})
        set({ cats:[...get().cats, ...cats] })

      }catch (error) {
        responseErrorHandler(error)
      }finally{
        set({ loading:false })
      }
    },
    toggleLikeCats: async (catId:string) => {
      const likedCatIndex = get().cats?.findIndex((cat) => cat.id === catId);
      const favouriteCat = get().cats[likedCatIndex]
      try{
        if(!favouriteCat.favourite){
          
          const like = await catApi.likeCat(catId)
        
          set({
            cats: get().cats.map((cat) =>
              cat.id === catId
                ? { ...cat, favourite: { id: like.id} }
                : cat
            ),
          })

          favoriteStore.getState().setFavoriteCats(get().cats[likedCatIndex])

        }else{

          await catApi.dislikeCat(favouriteCat.favourite.id)

          const cats = get().cats.map((cat) =>{
              if(cat.id === catId){
                const copy = {...cat}
                delete copy.favourite
                return copy 
              }
              return cat
            })

          set({cats})
          favoriteStore.getState().deleteFavoriteCat(catId)

        }
      }catch (error) {
        responseErrorHandler(error)
      }
    },

  }))

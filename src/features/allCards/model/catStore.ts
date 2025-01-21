import { create } from 'zustand'
import { catApi } from '../api/cat.api'
import { CatImage } from './types'
import { responseErrorHandler } from '../../../common/utils/responseErrorHandler'
import { favoriteStore } from '../../favoriteCards/model/favoritesStore'
import { v4 as uuidv4 } from 'uuid';
import { getFromLocalStorage, setToLocalStorage } from '../../../common/utils/localStorage'
import { User } from '../../../common/enums/enums'


type CatStore = {
    cats:CatImage[] | []
    loading:boolean
    pageCount:number
    fetchCats:(signal?:AbortSignal)=>Promise<void>
    toggleLikeCats:(catId:string)=>Promise<void>
}
export const useCats = create<CatStore>((set,get) => ({
    cats:  [],
    loading:false,
    pageCount:0,
    fetchCats: async (signal?:AbortSignal) => {
      set({ loading:true })

      const userId = getFromLocalStorage(User.userId)

      if(!userId){
        setToLocalStorage(User.userId, uuidv4())
      }

      try{
        const {pageCount, cats} = get()

        const newCats = await catApi.fetchCat(pageCount, userId, signal  )

        set({pageCount: pageCount + 1, cats:[...cats, ...newCats]})

      }catch (error) {
        responseErrorHandler(error)
      }finally{
        set({ loading:false })
      }
    },
    toggleLikeCats: async (catId:string) => {
      const { cats} = get()

      const likedCatIndex = cats.findIndex((cat) => cat.id === catId);
      const favouriteCat = cats[likedCatIndex]

      const userId = getFromLocalStorage(User.userId)

      try{
        if(!favouriteCat.favourite){
          
          const like = await catApi.likeCat(catId, userId)
        
          set({
            cats: cats.map((cat) =>
              cat.id === catId
                ? { ...cat, favourite: { id: like.id} }
                : cat
            ),
          })

          favoriteStore.getState().setFavoriteCats(get().cats[likedCatIndex])

        }else{

          await catApi.dislikeCat(favouriteCat.favourite.id)

          const deleteCats = cats.map((cat) =>{
              if(cat.id === catId){
                const copy = {...cat}
                delete copy.favourite
                return copy 
              }
              return cat
            })

          set({cats:deleteCats})
          favoriteStore.getState().deleteFavoriteCat(catId)

        }
      }catch (error) {
        responseErrorHandler(error)
      }
    },

  }))

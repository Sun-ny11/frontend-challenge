import { persist } from 'zustand/middleware'
import { CatImage } from '../../allCards/model/types'
import { create } from 'zustand'

type FavoriteStore = {
  favoriteCats: CatImage[] | []
  setFavoriteCats: (cat: CatImage) => void
  deleteFavoriteCat: (catId: string) => void
}

export const favoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favoriteCats: [],
      setFavoriteCats: (cat: CatImage) => {
        const duplicate = get().favoriteCats?.find((el) => el.id === cat.id)

        if (duplicate) {
          return
        }

        set((state) => ({ favoriteCats: [...state.favoriteCats, cat] }))
      },
      deleteFavoriteCat: (catId: string) => {
        set((state) => ({
          favoriteCats: state.favoriteCats?.filter((cat) => cat.id !== catId),
        }))
      },
    }),

    {
      name: 'likedCats',
    }
  )
)

import { Cards } from "../../../common/components/cards/Cards";
import { useCats } from "../../allCards/model/catStore";
import { favoriteStore } from "../model/favoritesStore";

export const FavoriteCards = () => {
  const favoriteCats = favoriteStore((state) => state.favoriteCats);
  const toggleLikeCats = useCats((state) => state.toggleLikeCats);
  return <Cards cats={favoriteCats} handleLikeClick={toggleLikeCats} />;
};

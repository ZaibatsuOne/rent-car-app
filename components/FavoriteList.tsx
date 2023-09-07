"use client";

import CarsNotFound from "./CarsNotFound";
import FavoriteItem from "./FavoriteItem";
import { useAddFavorite } from "@/utils/store";

const FavoriteList = () => {
  const favoriteList = useAddFavorite((state) => state.favoriteList);
  return (
    <>
      {favoriteList.length > 0 ? (
        <section className="grid grid-cols-1 gap-4">
          {favoriteList.map((item, index) => (
            <FavoriteItem car={item} key={index} />
          ))}
        </section>
      ) : (
        <CarsNotFound />
      )}
    </>
  );
};

export default FavoriteList;

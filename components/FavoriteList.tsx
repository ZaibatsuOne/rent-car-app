"use client";
import { useAddFavorite } from "@/utils/store";
import FavoriteItem from "./FavoriteItem";
import { Grid } from "@radix-ui/themes";

const FavoriteList = () => {
  const favoriteList = useAddFavorite((state) => state.favoriteList);
  return (
    <section className="grid grid-cols-1 gap-4">
      {favoriteList.map((item, index) => (
        <FavoriteItem car={item} key={index} />
      ))}
    </section>
  );
};

export default FavoriteList;

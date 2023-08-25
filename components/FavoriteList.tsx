"use client";
import { useAddFavorite } from "@/utils/store";

const FavoriteList = () => {
  const favoriteList = useAddFavorite((state) => state.favoriteList);
  return (
    <div>
      {favoriteList.map((item) => (
        <span>{item.name}</span>
      ))}
    </div>
  );
};

export default FavoriteList;

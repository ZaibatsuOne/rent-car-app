import FavoriteList from "@/components/FavoriteList";
import { Flex } from "@radix-ui/themes";

const FavoritePage = () => {
  return (
    <Flex direction={"column"} gap={"6"}>
      <div>
        <FavoriteList />
      </div>
    </Flex>
  );
};

export default FavoritePage;

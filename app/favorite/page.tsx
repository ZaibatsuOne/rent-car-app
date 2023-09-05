import FavoriteList from "@/components/FavoriteList";
import { Flex, Heading } from "@radix-ui/themes";

const FavoritePage = () => {
  return (
    <Flex direction={"column"} gap={"6"}>
      {/* <Heading as="h2" size={"8"} weight={"bold"}>
        My favorite
      </Heading> */}
      <div>
        <FavoriteList />
      </div>
    </Flex>
  );
};

export default FavoritePage;

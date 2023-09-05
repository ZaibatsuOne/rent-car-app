import { FC } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ICar } from "@/types/types";
import { Flex } from "@radix-ui/themes";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface Props {
  car: ICar;
}

const FavoriteItem: FC<Props> = ({ car }) => {
  return (
    <Card className="flex justify-between items-end">
      <CardHeader>
        <Flex gap="5">
          <Image src={car.image} alt={car.name} width={150} height={80} />
          <Flex direction={"row"} gap="4" justify="between">
            <CardTitle>{car.name}</CardTitle>
            <Flex gap="1">
              <div>
                <Badge variant="destructive">Favorite</Badge>
              </div>
              <div>
                <Badge>{car.type}</Badge>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>
      <CardFooter>
        <Button variant="ghost" className="gap-1 items-center">
          <Trash2 /> Remove from Favorite
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FavoriteItem;

import { FC } from "react";
import { reviews } from "@/data/data";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { Flex, Heading, Text } from "@radix-ui/themes";
const Reviews: FC = () => {
  return (
    <Flex direction="column" gap="7">
      <Flex gap="3" align="center">
        <Heading weight="bold" className="text-secondary500">
          Reviews
        </Heading>
        <Button size="sm">{reviews.length}</Button>
      </Flex>
      <Flex direction="column" gap="5">
        {reviews.map((review) => (
          <Flex direction="column" gap="5">
            <Flex justify="between">
              <Flex gap="3">
                <Image
                  className="rounded-full"
                  src={review.avatar}
                  width={56}
                  height={56}
                  alt={review.name}
                />
                <Flex direction="column" gap="1">
                  <Text weight="bold" size="4" className="text-secondary500">
                    {review.name}
                  </Text>
                  <Text weight="medium" className="text-secondary300">
                    {review.role}
                  </Text>
                </Flex>
              </Flex>
              <Flex direction="column" gap="1">
                <Text as="span">{review.date}</Text>
                <Flex gap="1">
                  <Star fill="#currentColor" />
                  <Star fill="#currentColor" />
                  <Star fill="#currentColor" />
                  <Star fill="#currentColor" />
                  <Star />
                </Flex>
              </Flex>
            </Flex>
            <Text className="text-secondary400 pl-[72px]">{review.review}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Reviews;

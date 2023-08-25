import { IReview } from "@/types/types";
import { Flex, Text } from "@radix-ui/themes";
import { Star } from "lucide-react";
import Image from "next/image";

interface Props {
  review: IReview;
}
const ReviewItem = ({ review }: Props) => {
  return (
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
  );
};

export default ReviewItem;

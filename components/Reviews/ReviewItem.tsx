import Image from "next/image";
import { Flex, Text } from "@radix-ui/themes";
import { IReview } from "@/types/types";
import { Star } from "lucide-react";

interface Props {
  review: IReview;
}
const ReviewItem = ({ review }: Props) => {
  const { date } = review;

  const normalDate = new Date(date * 1000);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = normalDate.getDate();
  const monthNumber = normalDate.getMonth();
  const month = monthNames[monthNumber];
  const year = normalDate.getFullYear();

  return (
    <Flex direction="column" gap="5">
      <Flex justify="between">
        <Flex gap="3">
          <img
            src={review.avatar}
            className="rounded-full w-14 h-14"
            alt="User Avatar"
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
          <Text as="span">
            {day} {month} {year}
          </Text>
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

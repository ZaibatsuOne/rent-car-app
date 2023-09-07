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
    <Flex direction="column" className="md:gap-5 gap-1">
      <Flex justify="between">
        <Flex gap="3">
          <img
            src={review.avatar}
            className="w-14 h-14 rounded-full"
            alt="User Avatar"
          />
          <Flex
            direction="column"
            gap="1"
            className="text-ellipsis  max-w-4xl overflow-hidden"
          >
            <Text weight="bold" size="4" className="text-secondary500">
              {review.name}
            </Text>
            <Text
              weight="medium"
              className="text-secondary300 sm:text-base text-xs"
            >
              {review.role}
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="1">
          <Text as="span" className="sm:text-base text-xs">
            {day} {month} {year}
          </Text>
          <Flex gap="1">
            <Star fill="#currentColor" className="md:h-5 md:w-5 w-3 h-3" />
            <Star fill="#currentColor" className="md:h-5 md:w-5 w-3 h-3" />
            <Star fill="#currentColor" className="md:h-5 md:w-5 w-3 h-3" />
            <Star fill="#currentColor" className="md:h-5 md:w-5 w-3 h-3" />
            <Star className="md:h-5 md:w-5 w-3 h-3" />
          </Flex>
        </Flex>
      </Flex>
      <div className="text-ellipsis max-w-5xl overflow-hidden">
        <Text className="text-secondary400 pl-[72px] text-xs sm:text-base">
          {review.review}
        </Text>
      </div>
    </Flex>
  );
};

export default ReviewItem;

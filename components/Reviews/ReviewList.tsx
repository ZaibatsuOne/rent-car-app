"use client";

import ReviewItem from "./ReviewItem";
import reviewService from "@/services/review.service";
import { Flex, Button, Text } from "@radix-ui/themes";
import { ChevronDown } from "lucide-react";
import { useState, FC } from "react";
import { useQuery } from "@tanstack/react-query";

const ReviewList: FC = () => {
  const [reviewsCount, setReviewsCount] = useState(2);

  const { data } = useQuery(["reviews"], () => reviewService.getAll(), {
    select: ({ data }) => data,
  });

  return (
    <>
      <Flex direction="column" gap="5">
        {data?.slice(0, reviewsCount).map((review) => (
          <ReviewItem review={review} />
        ))}
      </Flex>
      {data?.length === reviewsCount || data?.length + 1 === reviewsCount ? (
        <Button
          variant="ghost"
          className="text-secondary300"
          onClick={(): void => setReviewsCount(2)}
        >
          <Text>Show Less</Text>
          <ChevronDown className="rotate-180" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          className="text-secondary300"
          onClick={(): void => setReviewsCount(reviewsCount + 2)}
        >
          <Text>Show More</Text>
          <ChevronDown />
        </Button>
      )}
    </>
  );
};

export default ReviewList;

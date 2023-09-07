"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import { FC, useState } from "react";

import { ChevronDown } from "lucide-react";
import ReviewItem from "./ReviewItem";
import reviewService from "@/services/review.service";
import { useQuery } from "@tanstack/react-query";

const ReviewList: FC = () => {
  const { data } = useQuery(["reviews"], () => reviewService.getAll(), {
    select: ({ data }) => data,
  });

  console.log(data);

  const [reviewsCount, setReviewsCount] = useState(2);
  const reviews = data ?? [];

  return (
    <>
      <Flex direction="column" gap="5">
        {reviews.slice(0, reviewsCount).map((review) => (
          <ReviewItem review={review} />
        ))}
      </Flex>
      {reviews.length === reviewsCount ||
      reviews.length + 1 === reviewsCount ? (
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

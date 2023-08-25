import ReviewForm from "./Form/ReviewForm";
import ReviewItem from "./ReviewItem";
import { authOptions } from "@/services/auth.service";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { reviews } from "@/data/data";

const Reviews = () => {
  return (
    <Flex direction="column" gap="7">
      <Flex justify="between" align="center">
        <Flex gap="3" align="center">
          <Heading weight="bold" className="text-secondary500">
            Reviews
          </Heading>
          <Button size="sm">{reviews.length}</Button>
        </Flex>
      </Flex>
      <Flex direction="column" gap="5">
        {reviews.slice(0, 2).map((review) => (
          <ReviewItem review={review} />
        ))}
      </Flex>
      <Button variant="ghost" className="text-secondary300">
        <Text>Show All</Text>
        <ChevronDown />
      </Button>
    </Flex>
  );
};

export default Reviews;

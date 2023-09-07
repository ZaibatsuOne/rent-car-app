import LeaveFeedback from "./LeaveFeedback";
import ReviewForm from "../Form/ReviewForm";
import ReviewList from "./ReviewList";
import reviewService from "@/services/review.service";
import { authOptions } from "@/services/auth.service";
import { Button } from "../ui/button";
import { Flex, Heading } from "@radix-ui/themes";
import { getServerSession } from "next-auth";

const getReviews = async () => {
  const response = await reviewService.getAll();
  return response.data;
};

const Reviews = async () => {
  const session = await getServerSession(authOptions);
  const reviews = await getReviews();

  return (
    <Flex direction="column" gap="7" className="rounded-xl p-6 bg-white">
      <Flex justify="between" align="center" className="gap-3">
        <Flex gap="3" align="center">
          <Heading weight="bold" className="text-secondary500">
            Reviews
          </Heading>
          <Button size="sm">{reviews.length}</Button>
        </Flex>
        <LeaveFeedback userData={session?.user?.name} />
      </Flex>
      <ReviewForm name={session?.user?.name} avatar={session?.user?.image} />
      <ReviewList />
    </Flex>
  );
};

export default Reviews;

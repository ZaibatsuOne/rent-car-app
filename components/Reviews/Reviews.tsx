import LeaveFeedback from "./LeaveFeedback";
import ReviewForm from "../Form/ReviewForm";
import ReviewList from "./ReviewList";
import { Button } from "../ui/button";
import { Flex, Heading } from "@radix-ui/themes";
import { reviews } from "@/data/data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/auth.service";

const Reviews = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Flex direction="column" gap="7">
      <Flex justify="between" align="center">
        <Flex gap="3" align="center">
          <Heading weight="bold" className="text-secondary500">
            Reviews
          </Heading>
          <Button size="sm">{reviews.length}</Button>
        </Flex>
        <LeaveFeedback />
      </Flex>
      <ReviewForm name={session?.user?.name} avatar={session?.user?.image} />
      <ReviewList />
    </Flex>
  );
};

export default Reviews;

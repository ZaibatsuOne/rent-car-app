import { FC } from "react";
import { reviews } from "@/data/data";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
const Reviews: FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex gap-3 items-center">
        <h3 className="font-semibold text-xl text-secondary500">Reviews</h3>
        <Button size="sm">{reviews.length}</Button>
      </header>
      <div className="flex flex-col gap-6">
        {reviews.map((review) => (
          <article className="flex flex-col gap-[22px]">
            <header className="flex justify-between">
              <div className="flex gap-4">
                <Image
                  className="rounded-full"
                  src={review.avatar}
                  width={56}
                  height={56}
                  alt={review.name}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold text-secondary500">
                    {review.name}
                  </p>
                  <p className="text-sm font-medium text-secondary300">
                    {review.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span>{review.date}</span>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </header>
            <div className="text-sm text-secondary400 pl-[72px]">
              {review.review}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

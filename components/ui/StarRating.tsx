"use client";

import { FC, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Flex } from "@radix-ui/themes";
import { useCookies } from "react-cookie";
import { ICar } from "@/types/types";

interface Props {
  car: ICar;
}

const StarRating: FC<Props> = ({ car }) => {
  const cookie_key = `rating_${car.id}`;

  const [rating, setRating] = useState(0);
  const [cookie, setCookie] = useCookies([cookie_key]);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (cookie[cookie_key] !== undefined) {
      setRating(parseInt(cookie[cookie_key]));
    }
  }, []);

  useEffect(() => {
    setCookie(cookie_key, rating.toString());
  }, [rating]);

  return (
    <Flex gap="1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              name="rating"
              type="radio"
              value={ratingValue}
              onClick={(): void => {
                setRating(ratingValue);
              }}
            />
            <Star
              fill={ratingValue <= (hover || rating) ? "#00000" : "#ffffff"}
              onMouseEnter={(): void => setHover(ratingValue)}
              onMouseLeave={(): void => setHover(0)}
              className="cursor-pointer"
            />
          </label>
        );
      })}
    </Flex>
  );
};

export default StarRating;

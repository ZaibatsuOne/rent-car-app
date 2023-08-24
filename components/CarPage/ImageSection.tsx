"use client";
import Image from "next/image";
import { ICar } from "@/types/types";
import { FC, useState } from "react";
import { Flex } from "@radix-ui/themes";

interface Props {
  car: ICar;
}

const ImageSection: FC<Props> = ({ car }) => {
  const [currentPhoto, setCurrentPhoto] = useState(1);
  const [mainPhoto, setMainPhoto] = useState(car.photos[0]);

  return (
    <Flex direction="column" gap="6">
      <div className=" w-[492px] h-[300px] overflow-hidden rounded-xl bg-primary500 bg-hero-pattern-two">
        <Image
          width={1920}
          height={1080}
          src={mainPhoto}
          alt="car"
          quality={100}
          className="object-cover h-full w-full"
        />
      </div>
      <Flex gap="6" align="center">
        {car.photos.map((photo, index) => (
          <div
            className={`flex items-center overflow-hidden justify-center bg-primary500 rounded-xl cursor-pointer ${
              currentPhoto === index + 1
                ? "w-[132px] h-[108px] outline-primary500 outline outline-offset-8"
                : "w-[148px] h-[124px]"
            }`}
            onClick={() => {
              setCurrentPhoto(index + 1);
              setMainPhoto(photo);
            }}
          >
            <Image
              width={1080}
              height={720}
              src={photo}
              alt="car"
              className="w-full h-36 object-cover"
            />
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default ImageSection;

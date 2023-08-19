"use client";

import Image from "next/image";
import { ICar } from "@/types/types";
import { FC, useState } from "react";

interface Props {
  car: ICar;
}

const ImageSection: FC<Props> = ({ car }) => {
  const [currentPhoto, setCurrentPhoto] = useState(1);
  const photos = [1, 2, 3];
  const { image } = car;
  return (
    <section className="flex flex-col gap-6">
      <div className="flex w-[492px] h-[300px] rounded-xl bg-primary500 items-center justify-center bg-hero-pattern-two">
        <Image src={image} width={380} height={120} sizes="100vw" alt="car" />
      </div>
      <div className="flex gap-6 items-center ">
        {photos.map((photo) => (
          <div
            className={`flex items-center justify-center bg-primary500 rounded-xl cursor-pointer ${
              currentPhoto === photo
                ? "w-[132px] h-[108px] outline-4 outline-primary500 outline outline-offset-8"
                : "w-[148px] h-[124px]"
            }`}
            onClick={() => setCurrentPhoto(photo)}
          >
            <Image
              src={image}
              width={116}
              height={36}
              sizes="100vw"
              alt="car"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;

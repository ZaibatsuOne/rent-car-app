import { ICar } from "@/types/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  car: ICar;
}

const ImageSection: FC<Props> = ({ car }) => {
  const { image } = car;
  return (
    <div className="flex w-[492px] h-[360px] rounded-xl bg-primary500 items-center justify-center bg-hero-pattern-two">
      <Image src={image} width={380} height={120} sizes="100vw" alt="car" />
    </div>
  );
};

export default ImageSection;

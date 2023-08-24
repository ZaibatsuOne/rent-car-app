import DescriptionSection from "@/components/CarPage/DescriptionSection";
import ImageSection from "@/components/CarPage/ImageSection";
import RecommendCars from "@/components/RecommendCars";
import Reviews from "@/components/Reviews";
import carService from "@/services/car.service";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

const getCar = async (id: number) => {
  const data = await carService.getById(id);
  return data.data;
};

interface Props {
  params: { id: number };
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const car = await getCar(params.id);
  return {
    title: "MORENT - " + car.name,
  };
};

const CarPage = async ({ params: { id } }: Props) => {
  const car = await getCar(id);
  return (
    <main className="flex flex-col gap-8">
      <section className="grid grid-cols-2 items-center">
        <ImageSection car={car} />
        <DescriptionSection car={car} />
      </section>
      <Flex direction="column" className="gap-16">
        <Reviews />
        <RecommendCars columns="3" count={7} />
      </Flex>
    </main>
  );
};

export default CarPage;

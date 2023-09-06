import DescriptionSection from "@/components/CarPage/DescriptionSection";
import ImageSection from "@/components/CarPage/ImageSection";
import RecommendCars from "@/components/RecommendCars";
import Reviews from "@/components/Reviews/Reviews";
import carService from "@/services/car.service";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

const getOneCar = async (id: number) => {
  const data = await carService.getById(id);
  return data.data;
};

const getAllCar = async () => {
  const data = await carService.getAll();
  return data.data;
};

interface Props {
  params: { id: number };
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const car = await getOneCar(params.id);
  return {
    title: "MORENT - " + car.name,
  };
};

const CarPage = async ({ params: { id } }: Props) => {
  const oneCar = await getOneCar(id);
  const allCars = await getAllCar();
  return (
    <main className="container flex flex-col gap-20 py-10">
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ImageSection car={oneCar} />
        <DescriptionSection car={oneCar} />
      </section>
      <Flex direction="column" className="gap-16">
        <Reviews />
        <RecommendCars columns="3" count={3} cars={allCars} />
      </Flex>
    </main>
  );
};

export default CarPage;

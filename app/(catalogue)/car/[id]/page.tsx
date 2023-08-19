import DescriptionSection from "@/components/CarPage/DescriptionSection";
import ImageSection from "@/components/CarPage/ImageSection";
import AsideNavbar from "@/components/dashboard/AsideNavbar";
import carService from "@/services/car.service";

const getCar = async (id: number) => {
  const data = await carService.getById(id);
  return data.data;
};

interface Props {
  params: {
    id: number;
  };
}

const CarPage = async ({ params: { id } }: Props) => {
  const car = await getCar(id);
  return (
    <main>
      <ImageSection />
      <DescriptionSection car={car} />
    </main>
  );
};

export default CarPage;

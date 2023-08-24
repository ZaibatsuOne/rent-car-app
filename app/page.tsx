import Catalogue from "@/components/Catalogue";
import HeroSection from "@/components/HeroSection";
import carService from "@/services/car.service";

const getCars = async () => {
  const response = await carService.getAll();
  return response.data;
};

export default async function Home() {
  const cars = await getCars();
  return (
    <main>
      <HeroSection />
      <Catalogue cars={cars} />
    </main>
  );
}

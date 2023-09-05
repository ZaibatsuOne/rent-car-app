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
    <main className="container pt-10 pb-10">
      <HeroSection />
      <Catalogue cars={cars} />
    </main>
  );
}

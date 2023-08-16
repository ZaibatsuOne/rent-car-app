import Catalogue from "@/components/Catalogue";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <Catalogue />
    </main>
  );
}

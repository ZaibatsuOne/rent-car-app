import Catalogue from "@/components/Catalogue";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Catalogue />
    </main>
  );
}

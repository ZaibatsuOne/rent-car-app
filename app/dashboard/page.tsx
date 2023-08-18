"use client";

import AsideNavbar from "@/components/dashboard/AsideNavbar";
import CarCard from "@/components/CarCard";
import carService from "@/services/car.service";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CarsNotFound from "@/components/CarsNotFound";

const Dashboard = () => {
  const { data, isLoading } = useQuery(["cars"], () => carService.getAll(), {
    select: ({ data }) => data,
  });

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const fetchCars = () => {
    if (isLoading) return <div>Loading...</div>;

    let filteredCars = data;

    if (selectedTypes.length > 0) {
      filteredCars = data?.filter((car) => selectedTypes.includes(car.type));
    }

    if (filteredCars?.length === 0) {
      return <CarsNotFound />;
    }

    return (
      <section className="grid grid-cols-3 gap-8">
        {filteredCars?.map((car) => (
          <Link key={car.id} href={`/car/${car.id}`}>
            <CarCard car={car} />
          </Link>
        ))}
      </section>
    );
  };

  return (
    <main>
      <section className="flex gap-4">
        <AsideNavbar
          onTypeChange={handleTypeChange}
          selectedTypes={selectedTypes}
        />
        {fetchCars()}
      </section>
    </main>
  );
};

export default Dashboard;

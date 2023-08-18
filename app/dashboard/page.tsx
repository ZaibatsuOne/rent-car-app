"use client";
import AsideNavbar from "@/components/dashboard/AsideNavbar";
import CarCard from "@/components/CarCard";
import carService from "@/services/car.service";
import CarsNotFound from "@/components/CarsNotFound";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Dashboard = () => {
  const { data, isLoading } = useQuery(["cars"], () => carService.getAll(), {
    select: ({ data }) => data,
  });

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<number[]>([]);

  const handleCapacityChange = (capacity: number) => {
    if (selectedCapacity.includes(capacity)) {
      setSelectedCapacity(selectedCapacity.filter((c) => c !== capacity));
    } else {
      setSelectedCapacity([...selectedCapacity, capacity]);
    }
  };

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
      filteredCars = filteredCars?.filter((car) =>
        selectedTypes.includes(car.type)
      );
    }

    if (selectedCapacity.length > 0) {
      filteredCars = filteredCars?.filter((car) =>
        selectedCapacity.includes(car.capacity)
      );
    }

    if (filteredCars?.length === 0) {
      return <CarsNotFound />;
    }

    return (
      <section className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          handleCapacityChange={handleCapacityChange}
          selectedCapacity={selectedCapacity}
        />
        {fetchCars()}
      </section>
    </main>
  );
};

export default Dashboard;

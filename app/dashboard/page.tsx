"use client";

import AsideNavbar from "@/components/dashboard/AsideNavbar";
import CarCard from "@/components/CarCard";
import carService from "@/services/car.service";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { data, isLoading, error } = useQuery(
    ["car", 1],
    () => carService.getAll(),
    {
      select: ({ data }) => data,
    }
  );

  const fetchCars = () => {
    if (isLoading) return <div>Loading...</div>;
    if (data)
      return (
        <section className="grid grid-cols-3 gap-8">
          {data.map((car) => (
            <CarCard car={car} />
          ))}
        </section>
      );
    if (!data) return <div>Cars Not Found!</div>;
  };

  return (
    <main>
      <section className="flex gap-4">
        <AsideNavbar />
        {fetchCars()}
      </section>
    </main>
  );
};

export default Dashboard;

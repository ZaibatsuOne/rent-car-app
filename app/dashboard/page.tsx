"use client";
import AsideNavbar from "@/components/dashboard/AsideNavbar";
import { useState } from "react";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";

const Dashboard = () => {
  return (
    <main>
      <section className="flex gap-4">
        <AsideNavbar />
        <section className="grid grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard car={car} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default Dashboard;

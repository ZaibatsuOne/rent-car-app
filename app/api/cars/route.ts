import { NextResponse } from "next/server";
import { cars } from "@/data/cars";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("id");

  let currentCar = cars;

  if (query) {
    currentCar = cars.find((car) => car.id === query);
  }

  return NextResponse.json(currentCar);
}

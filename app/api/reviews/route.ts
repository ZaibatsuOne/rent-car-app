import { NextResponse } from "next/server";
import { reviews } from "@/data/data";

export async function GET(req: Request) {
  return NextResponse.json(reviews);
}

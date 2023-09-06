import axios from "axios";
import { ICar } from "@/types/types";

const BASE_URL = process.env.NEXT_PUBLIC_CARS_URL as string;
class CarService {
  async getAll() {
    return axios.get<ICar[]>(BASE_URL);
  }

  async getById(id: number) {
    return axios.get<ICar>(`${BASE_URL}/${id}`);
  }
}

export default new CarService();

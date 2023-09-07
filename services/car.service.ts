import { ICar } from "@/types/types";
import axios from "axios";

class CarService {
  async getAll() {
    return axios.get<ICar[]>(`${process.env.BASE_URL}/api/cars`);
  }

  async getById(id: any) {
    return axios.get<ICar>(`${process.env.BASE_URL}/api/cars?id=${id}`);
  }
}

export default new CarService();

import { ICar } from "@/types/types";
import axios from "axios";

class CarService {
  async getAll() {
    return axios.get<ICar[]>(`http://localhost:3000/api/cars`);
  }

  async getById(id: any) {
    return axios.get<ICar>(`http://localhost:3000/api/cars?id=${id}`);
  }
}

export default new CarService();

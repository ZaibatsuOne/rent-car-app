import axios from "axios";
import { ICar } from "@/types/types";

class CarService {
  async getAll() {
    return axios.get<ICar[]>(
      `https://6454dae6a74f994b334ad4fb.mockapi.io/carShop`
    );
  }

  async getById(id: number) {
    return axios.get<ICar>(
      `https://6454dae6a74f994b334ad4fb.mockapi.io/carShop/${id}`
    );
  }
}

export default new CarService();

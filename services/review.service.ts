import axios from "axios";
import { IReview } from "@/types/types";

class ReviewService {
  async getAll() {
    return axios.get<IReview[]>(
      "https://6454dae6a74f994b334ad4fb.mockapi.io/carReview"
    );
  }
  async postReview(review: IReview) {
    return axios.post(
      "https://6454dae6a74f994b334ad4fb.mockapi.io/carReview",
      review
    );
  }
}

export default new ReviewService();

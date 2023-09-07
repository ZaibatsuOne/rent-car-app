import { IReview } from "@/types/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_REVIEW_URL as string;

class ReviewService {
  async getAll() {
    return axios.get<IReview[]>(BASE_URL);
  }
  async create(review: IReview) {
    return axios.post<IReview>(BASE_URL, review);
  }
}

export default new ReviewService();

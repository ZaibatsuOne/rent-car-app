import * as yup from "yup";

export const reviewSchema = yup.object({
  role: yup.string(),
  review: yup.string().required(),
});

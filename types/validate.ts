import * as yup from "yup";

export const reviewSchema = yup.object({
  role: yup.string(),
  review: yup.string().required(),
});

export const billingInfoSchema = yup.object({
  name: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/),
  adress: yup.string().required(),
  town: yup.string().required(),
});

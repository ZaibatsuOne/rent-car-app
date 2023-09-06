"use client";
import { FC, useState } from "react";
import BillingCard from "../BillingCard";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import PhoneNumberInput from "./PhoneNumberInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { billingInfoSchema } from "@/types/validate";

interface Props {}

const BillingInfo: FC<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(billingInfoSchema),
    mode: "onChange",
  });
  const [value, setValue] = useState();

  return (
    <BillingCard step={1}>
      <form className="grid grid-cols-2 gap-8">
        <CustomInput
          label="Name"
          labelFor="name"
          placeholder="Your name"
          register={{ ...register("name") }}
          errorMessage={errors.name?.message}
        />
        <CustomInput
          label="Phone Number"
          labelFor="phone "
          placeholder="Phone number"
          register={{ ...register("phone") }}
          errorMessage={errors.phone?.message}
        />
        <CustomInput
          label="Adress"
          labelFor="adress"
          placeholder="Adress"
          register={{ ...register("adress") }}
          errorMessage={errors.adress?.message}
        />
        <CustomInput
          label="Town/City"
          labelFor="town"
          placeholder="Town or city"
          register={{ ...register("town") }}
          errorMessage={errors.town?.message}
        />
      </form>
    </BillingCard>
  );
};

export default BillingInfo;

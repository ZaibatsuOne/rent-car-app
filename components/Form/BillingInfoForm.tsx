"use client";

import BillingCard from "../BillingCard";
import CustomInput from "./CustomInput";
import { FC } from "react";
import { billingInfoSchema } from "@/types/validate";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {}

const BillingInfo: FC<Props> = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(billingInfoSchema),
    mode: "onChange",
  });

  return (
    <BillingCard step={1}>
      <form className="lg:grid-cols-2 grid grid-cols-1 gap-8">
        <CustomInput
          label="Name"
          labelFor="name"
          placeholder="Your name"
          register={{ ...register("name") }}
          // onChange={handleNameChange}
          errorMessage={errors.name?.message}
        />
        <CustomInput
          label="Phone Number"
          labelFor="phone "
          placeholder="Phone number"
          // onChange={handlePhoneChange}
          register={{ ...register("phone") }}
          errorMessage={errors.phone?.message}
        />
        <CustomInput
          label="Adress"
          labelFor="adress"
          placeholder="Adress"
          // onChange={handleAddressChange}
          register={{ ...register("adress") }}
          errorMessage={errors.adress?.message}
        />
        <CustomInput
          label="Town/City"
          labelFor="town"
          placeholder="Town or city"
          // onChange={handleTownChange}
          register={{ ...register("town") }}
          errorMessage={errors.town?.message}
        />
      </form>
    </BillingCard>
  );
};

export default BillingInfo;

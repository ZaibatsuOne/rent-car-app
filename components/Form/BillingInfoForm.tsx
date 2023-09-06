"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import BillingCard from "../BillingCard";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { billingInfoSchema } from "@/types/validate";
import { useFormStore } from "@/utils/store";

interface Props {}

const BillingInfo: FC<Props> = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(billingInfoSchema),
    mode: "onChange",
  });

  const { setFormData } = useFormStore();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ name: event.target.value });
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ phone: event.target.value });
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ address: event.target.value });
  };

  const handleTownChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ town: event.target.value });
  };
  return (
    <BillingCard step={1}>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CustomInput
          label="Name"
          labelFor="name"
          placeholder="Your name"
          register={{ ...register("name") }}
          onChange={handleNameChange}
          errorMessage={errors.name?.message}
        />
        <CustomInput
          label="Phone Number"
          labelFor="phone "
          placeholder="Phone number"
          onChange={handlePhoneChange}
          register={{ ...register("phone") }}
          errorMessage={errors.phone?.message}
        />
        <CustomInput
          label="Adress"
          labelFor="adress"
          placeholder="Adress"
          onChange={handleAddressChange}
          register={{ ...register("adress") }}
          errorMessage={errors.adress?.message}
        />
        <CustomInput
          label="Town/City"
          labelFor="town"
          placeholder="Town or city"
          onChange={handleTownChange}
          register={{ ...register("town") }}
          errorMessage={errors.town?.message}
        />
      </form>
    </BillingCard>
  );
};

export default BillingInfo;

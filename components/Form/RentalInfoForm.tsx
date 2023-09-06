"use client";
import React from "react";
import BillingCard from "../BillingCard";
import CustomInput from "./CustomInput";

const RentalInfoForm = () => {
  // const {} = useForm();
  return (
    <BillingCard step={2}>
      {/* <form>
        <CustomInput
          label="Adress"
          labelFor="adress"
          placeholder="Adress"
          register={{ ...register("adress") }}
        />
      </form> */}
    </BillingCard>
  );
};

export default RentalInfoForm;

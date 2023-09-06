"use client";
import React from "react";
import BillingCard from "../BillingCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Flex } from "@radix-ui/themes";

const RentalInfoForm = () => {
  return (
    <BillingCard step={2}>
      <form className="grid grid-cols-1 gap-8">
        <Select>
          <Flex direction="column" gap="4">
            <Label>Locations</Label>
            <SelectTrigger className="text-secondary300 bg-[#F6F7F9]">
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
          </Flex>
          <SelectContent>
            <SelectItem value="msc">Moscow</SelectItem>
            <SelectItem value="spb">Saint-Petersburg</SelectItem>
            <SelectItem value="krsk">Krasnoyarsk</SelectItem>
          </SelectContent>
        </Select>
      </form>
    </BillingCard>
  );
};

export default RentalInfoForm;

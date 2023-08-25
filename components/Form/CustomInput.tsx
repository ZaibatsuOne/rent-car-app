import { FC } from "react";
import { Flex } from "@radix-ui/themes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  label: string;
  labelFor: string;
  placeholder: string;
  register: any;
}

const CustomInput: FC<Props> = ({ label, labelFor, placeholder, register }) => {
  return (
    <Flex direction="column" gap="4">
      <Label htmlFor={labelFor}>{label}</Label>
      <Input placeholder={placeholder} {...register} />
    </Flex>
  );
};

export default CustomInput;

import { FC } from "react";
import { Flex } from "@radix-ui/themes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  label: string;
  labelFor: string;
  placeholder: string;
  register: any;
  errorMessage: string | undefined;
}

const CustomInput: FC<Props> = ({
  label,
  labelFor,
  placeholder,
  register,
  errorMessage,
}) => {
  return (
    <Flex direction="column" gap="4">
      <Label htmlFor={labelFor}>{label}</Label>
      <div>
        <Input
          placeholder={placeholder}
          {...register}
          className="bg-[#F6F7F9]"
        />
        <span className="text-xs text-error600">{errorMessage}</span>
      </div>
    </Flex>
  );
};

export default CustomInput;

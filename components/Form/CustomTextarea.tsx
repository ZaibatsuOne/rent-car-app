import { FC } from "react";
import { Flex } from "@radix-ui/themes";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  label: string;
  labelFor: string;
  placeholder: string;
  register: any;
}

const CustomTextarea: FC<Props> = ({
  label,
  labelFor,
  placeholder,
  register,
}) => {
  return (
    <Flex direction="column" gap="4">
      <Label htmlFor={labelFor}>{label}</Label>
      <Textarea placeholder={placeholder} {...register} />
    </Flex>
  );
};

export default CustomTextarea;

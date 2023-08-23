import { FC } from "react";
import { Button } from "./ui/button";
import { Flex, Heading } from "@radix-ui/themes";

interface Props {
  title: string;
  button: true | false;
}
const SectionBar: FC<Props> = ({ title, button }) => {
  return (
    <Flex justify="between" align="center" px="5" py="2">
      <Heading weight="bold" size="3" className="text-secondary300">
        {title}
      </Heading>
      {button ? (
        <Button variant="reversed" href="/dashboard">
          View All
        </Button>
      ) : null}
    </Flex>
  );
};

export default SectionBar;

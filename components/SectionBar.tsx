import { FC } from "react";
import { Button } from "./ui/button";

interface Props {
  title: string;
  button: true | false;
}
const SectionBar: FC<Props> = ({ title, button }) => {
  return (
    <div className="flex justify-between items-center px-5 py-2">
      <h4 className="font-semibold text-secondary300">{title}</h4>
      {button ? (
        <Button variant="reversed" href="/dashboard">
          View All
        </Button>
      ) : null}
    </div>
  );
};

export default SectionBar;

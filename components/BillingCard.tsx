import { FC, PropsWithChildren } from "react";
import { Card, CardTitle } from "./ui/card";
import { Text } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

interface Props {
  step?: number;
  className?: string;
}

const BillingCard: FC<PropsWithChildren<Props>> = ({
  children,
  step = 1,
  className,
}) => {
  let title = "";
  let description = "";

  switch (step) {
    case 1:
      title = "Billing Info";
      description = "Please enter your billing info";
      break;
    case 2:
      title = "Rental Info";
      description = "Please select your rental date";
      break;
    case 3:
      title = "Confirmation";
      description =
        "We are getting to the end. Just a few clicks and your rental is ready!";
      break;
    default:
      title = "Rental Summary";
      description =
        "Prices may change depending on the length of the rental and the price of your rental car.";
      break;
  }

  return (
    <Card className={cn("flex flex-col gap-8 p-6", className)}>
      <header className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <CardTitle>{title}</CardTitle>
          <Text className="text-secondary300 lg:text-sm text-xs">
            {description}
          </Text>
        </div>
        {step === 5 ? (
          ""
        ) : (
          <span className="text-secondary300 lg:text-sm text-xs">
            Step {step} of 3
          </span>
        )}
      </header>
      <div>{children}</div>
    </Card>
  );
};

export default BillingCard;

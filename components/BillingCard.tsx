import { FC, PropsWithChildren } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Text } from "@radix-ui/themes";

interface Props {
  step?: number;
}

const BillingCard: FC<PropsWithChildren<Props>> = ({ children, step = 1 }) => {
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
      title = "Payment Method";
      description = "Please enter your payment method";
      break;
    case 4:
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
    <Card className="flex flex-col gap-8 p-6">
      <header className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <CardTitle>{title}</CardTitle>
          <Text className="text-secondary300 text-sm">{description}</Text>
        </div>
        {step === 5 ? (
          ""
        ) : (
          <span className="text-secondary300 text-sm">Step {step} of 4</span>
        )}
      </header>
      <div>{children}</div>
    </Card>
  );
};

export default BillingCard;

import BillingInfo from "@/components/Form/BillingInfoForm";
import ConfiramtionForm from "@/components/Form/ConfiramtionForm";
import RentalInfoForm from "@/components/Form/RentalInfoForm";
import RentalSummary from "@/components/RentalSummary";
import carService from "@/services/car.service";
import { Metadata } from "next";

const getCar = async (id: number) => {
  const data = await carService.getById(id);
  return data.data;
};

interface Props {
  params: { id: number };
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const car = await getCar(params.id);
  return {
    title: "Billing - " + car.name,
  };
};

export default async function BillingPage({ params: { id } }: Props) {
  const oneCar = await getCar(id);
  return (
    <main className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <RentalSummary car={oneCar} />
        </div>
        <section className="flex flex-col gap-8 lg:col-span-2">
          <BillingInfo />
          <RentalInfoForm />
          <ConfiramtionForm />
        </section>
      </div>
    </main>
  );
}

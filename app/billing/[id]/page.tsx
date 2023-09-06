import BillingInfo from "@/components/Form/BillingInfoForm";
import ConfiramtionForm from "@/components/Form/ConfiramtionForm";
import PaymentMethodForm from "@/components/Form/PaymentMethodForm";
import RentalInfoForm from "@/components/Form/RentalInfoForm";
import RentalSummary from "@/components/RentalSummary";
import carService from "@/services/car.service";

export const getOneCar = async (id: number) => {
  const data = await carService.getById(id);
  return data.data;
};

interface Props {
  params: { id: number };
}
const BillingPage = async ({ params: { id } }: Props) => {
  const car = await getOneCar(id);
  return (
    <main className="container py-10">
      <div className="grid grid-cols-3 gap-8">
        <section className="flex flex-col gap-8 col-span-2">
          <BillingInfo />
          <RentalInfoForm />
          <PaymentMethodForm />
          <ConfiramtionForm />
        </section>
        <div>
          <RentalSummary car={car} />
        </div>
      </div>
    </main>
  );
};

export default BillingPage;

"use client";
import { ShieldCheck } from "lucide-react";
import BillingCard from "../BillingCard";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useFormStore } from "@/utils/store";
import { FormState, IFormState } from "@/types/types";

const ConfiramtionForm = () => {
  const { formData, setFormData } = useFormStore() as FormState;

  const handleEmailCheckboxChange = (isChecked: boolean) => {
    setFormData({
      ...formData,
      agreeEmail: isChecked,
    });
  };

  const handleTermsCheckboxChange = () => {
    setFormData({
      ...formData,
      agreeTerms: !formData.agreeTerms,
    });
  };

  const handleRentNowClick = () => {
    console.log("FormData:", formData);
    console.log("Email Checked:", formData.agreeEmail);
    console.log("Terms Checked:", formData.agreeTerms);
  };

  const isFormValid = () => {
    const areFieldsValid = Object.values(formData).every(
      (value) => value !== ""
    );
    const isEmailChecked = formData.agreeEmail;
    const isTermsChecked = formData.agreeTerms;

    return areFieldsValid && isEmailChecked && isTermsChecked;
  };
  console.log(isFormValid);
  return (
    <BillingCard step={3}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center space-x-2 bg-[#F6F7F9] py-4 px-8 rounded-xl">
            <Checkbox
              id="email"
              defaultChecked={formData.agreeEmail}
              onCheckedChange={handleEmailCheckboxChange}
            />

            <Label htmlFor="email" className="text-xs lg:text-base">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </Label>
          </div>
          <div className="flex items-center space-x-2 bg-[#F6F7F9] py-4 px-8 rounded-xl">
            <Checkbox
              id="terms"
              onChange={handleTermsCheckboxChange}
              defaultChecked={formData.agreeTerms}
            />
            <Label htmlFor="terms" className="text-xs lg:text-base">
              I agree with our terms and conditions and privacy policy.
            </Label>
          </div>
        </div>
        <div>
          <Button disabled={!isFormValid()} onClick={handleRentNowClick}>
            Rent Now
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck />
            <Label>All your data are safe</Label>
          </div>
          <span className="text-sm text-secondary300">
            We are using the most advanced security to provide you the best
            experience ever.
          </span>
        </div>
      </div>
    </BillingCard>
  );
};

export default ConfiramtionForm;

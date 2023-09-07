"use client";
import BillingCard from "../BillingCard";
import { ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useState } from "react";

const ConfiramtionForm = () => {
  //Проверка чекбокса почты
  const [emailCheck, setEmailCheck] = useState(false);
  //Проверка чекбокса Terms
  const [termsCheck, setTermsCheck] = useState(false);

  return (
    <BillingCard step={3}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center space-x-2 bg-[#F6F7F9] py-4 px-8 rounded-xl">
            <input
              type="checkbox"
              className="w-4 h-4"
              value={emailCheck}
              onChange={(e) => setEmailCheck(e.target.checked)}
            />
            <Label htmlFor="email" className="text-xs lg:text-base">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </Label>
          </div>
          <div className="flex items-center space-x-2 bg-[#F6F7F9] py-4 px-8 rounded-xl">
            <input
              type="checkbox"
              className="w-4 h-4"
              value={termsCheck}
              onChange={(e) => setTermsCheck(e.target.checked)}
            />
            <Label htmlFor="terms" className="text-xs lg:text-base">
              I agree with our terms and conditions and privacy policy.
            </Label>
          </div>
        </div>
        <div>
          <Button onClick={() => console.log(termsCheck)}>Rent Now</Button>
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

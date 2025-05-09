"use client";

import MyFormWrapper from "@/components/form/MyFormWrapper";
import MyFormInput from "@/components/form/MyFormInput";
import { FieldValues } from "react-hook-form";
import MyBtn from "@/components/common/MyBtn";
import { useSearchParams } from "next/navigation";

const CardPaymentForm = () => {
  const price = useSearchParams().get("price");
  const handleSubmit = (data: FieldValues) => {
    console.log("Card Data:", data);
  };
console.log(price);
  return (
    <div className="max-w-2xl mx-auto md:p-5">
      <MyFormWrapper onSubmit={handleSubmit}>
        <div>
          <p className="md:text-lg font-medium mb-2">Cardholder Full name</p>
          <MyFormInput name="cardholderName" placeholder="Full name" />
        </div>
        <div>
          <p className="md:text-lg font-medium mb-2">Card Number</p>
          <MyFormInput name="cardNumber" placeholder="xxxxxxxxxxxx" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="md:text-lg font-medium mb-2">Expiry date</p>
            <MyFormInput name="expiryDate" placeholder="D/M/Y" />
          </div>
          <div className="flex-1">
            <p className="md:text-lg font-medium mb-2">CVV</p>
            <MyFormInput name="cvv" placeholder="Security code" />
          </div>
        </div>

        <MyBtn name="Send Payment" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default CardPaymentForm;

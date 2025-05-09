"use client";

import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { serviceType } from "@/constants/common";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues } from "react-hook-form";

const DeliveryForm = () => {
  const router = useRouter();
  const price = useSearchParams().get("price");
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
    router.push(`/checkout?price${price}`);
  };

  return (
    <div className="max-w-3xl mx-auto md:px-5 md:my-12 my-5">
      <MyFormWrapper onSubmit={handleSubmit}>

        <p className="text-xl font-medium mb-3">Pickup Information</p>
        <MyFormInput name="pickupName" placeholder="Name" />
        <MyFormInput name="pickupMobile" placeholder="Mobile Number" />
        <MyFormInput name="pickupEmail" placeholder="Email" />
        <MyFormInput name="pickupPostCode" placeholder="Post Code" />
        <MyFormInput name="pickupAddress" placeholder="Address" />

        <p className="text-xl font-medium mt-8 mb-3">Recipient Information</p>
        <MyFormInput name="recipientName" placeholder="Name" />
        <MyFormInput name="recipientMobile" placeholder="Mobile Number" />
        <MyFormInput name="recipientEmail" placeholder="Email" />
        <MyFormInput name="recipientPostCode" placeholder="Post Code" />
        <MyFormInput name="recipientAddress" placeholder="Address" />

        <p className="text-xl font-medium mt-8 mb-3">Type of Service</p>
        <MyFormSelect name="serviceType" options={serviceType} />

        <p className="text-xl font-medium mt-8 mb-3">Collection Details</p>
        <MyFormInput
          name="preferredCollectionDate"
          placeholder="Preferred Collection Date"
          type="date"
        />
        <MyFormInput
          name="avgCollectionTime"
          placeholder="Average Collection Time"
        />
        <MyFormInput
          name="avgDeliveryTime"
          placeholder="Average Delivery Time"
        />

        <p className="text-xl font-medium mt-8 mb-3">Package Information</p>
        <MyFormInput
          name="packageContent"
          placeholder="What are you sending?"
        />
        <MyFormInput
          name="packageWeight"
          placeholder="Weight (kg)"
          type="number"
        />
        <MyFormInput
          name="specialInstruction"
          placeholder="Any special instruction?"
        />

        <MyBtn name="Submit" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default DeliveryForm;

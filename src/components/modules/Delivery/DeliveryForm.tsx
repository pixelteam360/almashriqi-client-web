/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { serviceType, timeType } from "@/constants/common";
import { useDeliveryMutation } from "@/redux/features/common/commonApi";
import { validateHHMMTime } from "@/utils/validateHHMMTime";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const DeliveryForm = () => {
  const router = useRouter();
  const price = useSearchParams().get("price");
  const [delivery] = useDeliveryMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Uploading...");

    const { toAvgDeliveryTime, ...restData } = data;

    const date = new Date(data.preferredCollectionDate).toISOString();

    const packageWeight = parseInt(data.packageWeight, 10);

    try {
      const res = await delivery({
        ...restData,
        preferredCollectionDate: date,
        packageWeight,
      }).unwrap();
      console.log(res?.data?.id);
      if (res) {
        toast.success("Uploaded successfully", { id: toastId });
        router.push(`/checkout?price=${price}&id=${res?.data?.id}`);
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to Uplaod", {
        id: toastId,
      });
    }
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

        <MyFormSelect
          name="avgCollectionTime"
          options={timeType}
          label="Average Collection Time"
        />

        <div className="flex items-center gap-2">
          <MyFormSelect
            name="avgDeliveryTime"
            options={timeType}
            label="Average Delivery Time"
          />
          <p>to</p>
          <MyFormSelect
            name="toAvgDeliveryTime"
            options={timeType}
            label="Average Delivery Time"
          />
        </div>

        <p className="text-xl font-medium mt-8 mb-3">Package Information</p>
        <MyFormInput
          name="packageContent"
          placeholder="What are you sending?"
        />
        <MyFormInput name="packageWeight" placeholder="Weight (kg)" />
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

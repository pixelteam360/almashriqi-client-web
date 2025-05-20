/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useLoadScript } from "@react-google-maps/api";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { timeType } from "@/constants/common";
import { useDeliveryMutation } from "@/redux/features/common/commonApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import Spinner from "@/components/common/Spinner";
import { useAppSelector } from "@/redux/hooks";
import { getdeliveryData } from "@/redux/features/common/commonSlice";
import Link from "next/link";

interface Recipient {
  recipientName: string;
  recipientMobile: string;
  recipientEmail: string;
  recipientPostCode: string;
  recipientAddress: string;
}

const DeliveryForm = () => {
  const router = useRouter();
  const price = useSearchParams().get("price");
  const distance = useSearchParams().get("distance");
  const pickupRef = useRef<HTMLInputElement>(null);
  const deliveryInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries: ["places"],
  });
  const [delivery] = useDeliveryMutation();
  const { setValue } = useForm<FieldValues>();
  const deliveryData = useAppSelector(getdeliveryData);

  const recipient = deliveryData.deliveryPostCode.map((item) => ({
    recipientName: "",
    recipientMobile: "",
    recipientEmail: "",
    recipientPostCode: item,
    recipientAddress: "",
  }));

  const [recipients, setRecipients] = useState<Recipient[]>(recipient);

  const handleRecipientChange = (
    index: number,
    field: keyof Recipient,
    value: string
  ) => {
    const updatedRecipients = [...recipients];
    updatedRecipients[index][field] = value;
    setRecipients(updatedRecipients);
    setValue(`recipients[${index}].${field}`, value);
  };

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Uploading...");

    const date = new Date(data.preferredCollectionDate).toISOString();
    const packageWeight = parseInt(data.packageWeight, 10);

    const payload = {
      ...data,
      pickupPostCode: deliveryData.pickupPostCode,
      serviceType: deliveryData.service,
      recipients: recipients.map((recipient) => ({
        ...recipient,
      })),
      preferredCollectionDate: date,
      packageWeight,
    };

    try {
      const res = await delivery(payload).unwrap();
      if (res) {
        toast.success("Uploaded successfully", { id: toastId });
        router.push(
          `/checkout?price=${price}&distance=${distance}&id=${res?.data?.id}`
        );
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to upload", { id: toastId });
    }
  };

  if (!isLoaded) return <Spinner />;

  if (deliveryData.deliveryPostCode.length < 1) {
    return (
      <div className="flex flex-col gap-7 justify-center items-center mt-12">
        <h3 className="text-xl font-medium text-primary">
          Please Calculate the price first
        </h3>
        <Link href={"/"}>
          <MyBtn name="Go To Home" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto md:px-5 md:my-12 my-5">
      <MyFormWrapper onSubmit={handleSubmit}>
        <p className="text-xl font-medium mb-3">Pickup Information</p>
        <MyFormInput name="pickupName" placeholder="Name" />
        <MyFormInput name="pickupMobile" placeholder="Mobile Number" />
        <MyFormInput name="pickupEmail" placeholder="Email" />
        <input
          ref={pickupRef}
          defaultValue={deliveryData.pickupPostCode}
          disabled={true}
          name="pickup"
          className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
          placeholder="Post Code"
        />
        <MyFormInput name="pickupAddress" placeholder="Address" />

        {/* ========================= Recipient Information Start =================== */}
        <p className="text-xl font-medium mt-8 mb-3">Recipient Information</p>
        {recipients.map((recipient, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md relative">
            <p className="text-lg font-medium mb-2">Recipient {index + 1}</p>

            <input
              name={`recipients[${index}].recipientName`}
              className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
              placeholder="Name"
              onChange={(e) =>
                handleRecipientChange(index, "recipientName", e.target.value)
              }
            />
            <input
              name={`recipients[${index}].recipientMobile`}
              className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
              placeholder="Mobile Number"
              onChange={(e) =>
                handleRecipientChange(index, "recipientMobile", e.target.value)
              }
            />
            <input
              name={`recipients[${index}].recipientEmail`}
              className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
              placeholder="Email"
              onChange={(e) =>
                handleRecipientChange(index, "recipientEmail", e.target.value)
              }
            />
            <input
              ref={(el) => {
                deliveryInputRefs.current[index] = el;
              }}
              defaultValue={recipient.recipientPostCode}
              disabled={true}
              name={`recipients[${index}].recipientPostCode`}
              className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
              placeholder="Post Code"
            />
            <input
              name={`recipients[${index}].recipientAddress`}
              className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
              placeholder="Recipient Address"
              onChange={(e) =>
                handleRecipientChange(index, "recipientAddress", e.target.value)
              }
            />
          </div>
        ))}

        {/* ========================= Recipient Information End =================== */}

        <p className="text-xl font-medium mt-8 mb-3">Type of Service</p>
        <input
          name={`recipien`}
          defaultValue={deliveryData.service}
          disabled={true}
          className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
          placeholder="Recipient Address"
        />
        {/* <MyFormSelect name="serviceType" options={serviceType} /> */}

        <p className="text-xl font-medium mt-8 mb-3">Collection Details</p>
        <MyFormInput
          name="preferredCollectionDate"
          placeholder="Preferred Collection Date"
          type="date"
        />

        <div className="flex items-center gap-2">
          <MyFormSelect
            name="avgCollectionTime"
            options={timeType}
            label="Average Collection Time"
          />
          <p>to</p>
          <MyFormSelect
            name="toavgCollectionTime"
            options={timeType}
            label="Average Collection Time"
          />
        </div>

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

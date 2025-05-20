/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { serviceType, timeType } from "@/constants/common";
import { useDeliveryMutation } from "@/redux/features/common/commonApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import Spinner from "@/components/common/Spinner";

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
  const [recipients, setRecipients] = useState<Recipient[]>([
    {
      recipientName: "",
      recipientMobile: "",
      recipientEmail: "",
      recipientPostCode: "",
      recipientAddress: "",
    },
  ]);
  const [pickup, setPickup] = useState("");
  const pickupRef = useRef<HTMLInputElement>(null);
  const pickupAutoRef = useRef<google.maps.places.Autocomplete | null>(null);
  const deliveryAutoRefs = useRef<(google.maps.places.Autocomplete | null)[]>(
    []
  );
  const deliveryInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries: ["places"],
  });
  const [delivery] = useDeliveryMutation();
  const { setValue } = useForm<FieldValues>();

  const extractPostcode = (
    place: google.maps.places.PlaceResult
  ): string | null => {
    const component = place.address_components?.find((c) =>
      c.types.includes("postal_code")
    );
    return component?.long_name?.toUpperCase() || null;
  };

  const handlePlaceSelect = (type: "pickup" | "delivery", index?: number) => {
    if (type === "pickup") {
      const place = pickupAutoRef.current?.getPlace();
      if (!place || !place.address_components) {
        toast.error("Please select a valid UK postcode");
        return;
      }
      const postcode = extractPostcode(place);
      if (!postcode) {
        toast.error("No postcode found");
        return;
      }
      setPickup(postcode);
      if (pickupRef.current) {
        pickupRef.current.value = postcode;
      }
    } else if (typeof index === "number") {
      const place = deliveryAutoRefs.current[index]?.getPlace();
      if (!place || !place.address_components) {
        toast.error("Please select a valid UK postcode");
        return;
      }
      const postcode = extractPostcode(place);
      if (!postcode) {
        toast.error("No postcode found");
        return;
      }
      if (recipients.some((r) => r.recipientPostCode === postcode)) {
        toast.warning("This postcode is already added");
        return;
      }
      const updatedRecipients = [...recipients];
      updatedRecipients[index].recipientPostCode = postcode;
      setRecipients(updatedRecipients);
      setValue(`recipients[${index}].recipientPostCode`, postcode);
      if (deliveryInputRefs.current[index]) {
        deliveryInputRefs.current[index]!.value = postcode;
      }
    }
  };

  const addRecipient = () => {
    setRecipients([
      ...recipients,
      {
        recipientName: "",
        recipientMobile: "",
        recipientEmail: "",
        recipientPostCode: "",
        recipientAddress: "",
      },
    ]);

    deliveryAutoRefs.current.push(null);
    deliveryInputRefs.current.push(null);
  };

  const removeRecipient = (index: number) => {
    if (recipients.length === 1) {
      toast.error("At least one recipient is required");
      return;
    }
    setRecipients(recipients.filter((_, i) => i !== index));
    deliveryAutoRefs.current = deliveryAutoRefs.current.filter(
      (_, i) => i !== index
    );
    deliveryInputRefs.current = deliveryInputRefs.current.filter(
      (_, i) => i !== index
    );
  };

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

    const { toAvgDeliveryTime, toavgCollectionTime, ...restData } = data;

    const date = new Date(data.preferredCollectionDate).toISOString();
    const packageWeight = parseInt(data.packageWeight, 10);

    const payload = {
      ...restData,
      pickupPostCode: pickup,
      recipients: recipients.map((recipient) => ({
        ...recipient,
      })),
      preferredCollectionDate: date,
      packageWeight,
    };

    console.log(payload);

    try {
      const res = await delivery(payload).unwrap();
      if (res) {
        toast.success("Uploaded successfully", { id: toastId });
        router.push(`/checkout?price=${price}&id=${res?.data?.id}`);
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to upload", { id: toastId });
    }
  };

  if (!isLoaded) return <Spinner />;

  return (
    <div className="max-w-3xl mx-auto md:px-5 md:my-12 my-5">
      <MyFormWrapper onSubmit={handleSubmit}>
        <p className="text-xl font-medium mb-3">Pickup Information</p>
        <MyFormInput name="pickupName" placeholder="Name" />
        <MyFormInput name="pickupMobile" placeholder="Mobile Number" />
        <MyFormInput name="pickupEmail" placeholder="Email" />
        <Autocomplete
          onLoad={(autocomplete) => (pickupAutoRef.current = autocomplete)}
          onPlaceChanged={() => handlePlaceSelect("pickup")}
          options={{
            componentRestrictions: { country: "uk" },
            types: ["postal_code"],
          }}
        >
          <input
            ref={pickupRef}
            name="pickup"
            className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
            placeholder="Post Code"
          />
        </Autocomplete>
        <MyFormInput name="pickupAddress" placeholder="Address" />

        {/* ========================= Recipient Information Start =================== */}
        <p className="text-xl font-medium mt-8 mb-3">Recipient Information</p>
        {recipients.map((recipient, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md relative">
            <p className="text-lg font-medium mb-2">Recipient {index + 1}</p>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeRecipient(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
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
            <Autocomplete
              onLoad={(autocomplete) =>
                (deliveryAutoRefs.current[index] = autocomplete)
              }
              onPlaceChanged={() => handlePlaceSelect("delivery", index)}
              options={{
                componentRestrictions: { country: "uk" },
                types: ["postal_code"],
              }}
            >
              <input
                ref={(el) => {
                  deliveryInputRefs.current[index] = el;
                }}
                name={`recipients[${index}].recipientPostCode`}
                className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
                placeholder="Post Code"
                onChange={(e) =>
                  handleRecipientChange(
                    index,
                    "recipientPostCode",
                    e.target.value
                  )
                }
              />
            </Autocomplete>
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
        <button
          type="button"
          onClick={addRecipient}
          className="text-blue-500 hover:text-blue-700 mb-4"
        >
          Add another recipient
        </button>

        {/* ========================= Recipient Information End =================== */}

        <p className="text-xl font-medium mt-8 mb-3">Type of Service</p>
        <MyFormSelect name="serviceType" options={serviceType} />

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

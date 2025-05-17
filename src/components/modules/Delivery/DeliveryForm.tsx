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
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import Spinner from "@/components/common/Spinner";

const DeliveryForm = () => {
  const router = useRouter();
  const price = useSearchParams().get("price");
  const [isMultiple, setIsMultiple] = useState(false);
  const [pickup, setPickup] = useState("");
  const [postCodes, setPostCodes] = useState<string[]>([]);
  const [recipientAddresses, setRecipientAddresses] = useState<string[]>([]);
  const [tempAddress, setTempAddress] = useState("");
  const pickupRef = useRef<HTMLInputElement>(null);
  const deliveryRef = useRef<HTMLInputElement>(null);
  const pickupAutoRef = useRef<google.maps.places.Autocomplete | null>(null);
  const deliveryAutoRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [delivery] = useDeliveryMutation();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries: ["places"],
  });

  const extractPostcode = (
    place: google.maps.places.PlaceResult
  ): string | null => {
    const component = place.address_components?.find((c) =>
      c.types.includes("postal_code")
    );
    return component?.long_name?.toUpperCase() || null;
  };

  const handlePlaceSelect = (type: "pickup" | "delivery") => {
    const ref = type === "pickup" ? pickupAutoRef : deliveryAutoRef;
    const place = ref.current?.getPlace();

    if (!place || !place.address_components) {
      toast.error("Please select a valid UK postcode");
      return;
    }

    const postcode = extractPostcode(place);
    if (!postcode) {
      toast.error("No postcode found");
      return;
    }

    if (type === "pickup") {
      setPickup(postcode);
    } else {
      if (!isMultiple) {
        setPostCodes([postcode]);
      } else {
        if (postCodes.includes(postcode)) {
          toast.warning("This postcode is already added");
          return;
        }
        setPostCodes((prev) => [...prev, postcode]);
        if (deliveryRef.current) deliveryRef.current.value = "";
      }
    }
  };

  // Handle removing a postcode
  const handleRemovePostCode = (code: string) => {
    setPostCodes(postCodes.filter((item) => item !== code));
  };

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Uploading...");

    const { toAvgDeliveryTime, toavgCollectionTime, ...restData } = data;

    const date = new Date(data.preferredCollectionDate).toISOString();

    const packageWeight = parseInt(data.packageWeight, 10);

    const recipientAddress = recipientAddresses || [data.recipientAddress];

    console.log({
      ...restData,
      pickupPostCode: pickup,
      recipientPostCode: postCodes,
      preferredCollectionDate: date,
      packageWeight,
      recipientAddress,
    });

    try {
      const res = await delivery({
        ...restData,
        pickupPostCode: pickup,
        recipientPostCode: postCodes,
        preferredCollectionDate: date,
        packageWeight,
        recipientAddress,
      }).unwrap();

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

  const handleMultipleAddress = () => {
    if (!tempAddress.trim()) return toast.error("Address is required");

    if (recipientAddresses.includes(tempAddress.trim())) {
      return toast.warning("This address is already added");
    }

    setRecipientAddresses((prev) => [...prev, tempAddress.trim()]);
    setTempAddress("");
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

        <p className="text-xl font-medium mt-8 mb-3">Recipient Information</p>
        <MyFormInput name="recipientName" placeholder="Name" />
        <MyFormInput name="recipientMobile" placeholder="Mobile Number" />
        <MyFormInput name="recipientEmail" placeholder="Email" />
        <Autocomplete
          onLoad={(autocomplete) => (deliveryAutoRef.current = autocomplete)}
          onPlaceChanged={() => handlePlaceSelect("delivery")}
          options={{
            componentRestrictions: { country: "uk" },
            types: ["postal_code"],
          }}
        >
          <input
            ref={deliveryRef}
            name="delivery"
            className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white mb-4"
            placeholder="Post Code"
          />
        </Autocomplete>

        {isMultiple && (
          <div className="flex flex-wrap gap-2 items-center mb-4">
            {postCodes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-primary/15 px-2 rounded-md text-primary"
              >
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => handleRemovePostCode(item)}
                  className="ml-2 text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {!isMultiple && (
          <MyFormInput
            name="recipientAddress"
            placeholder="Recipient Address"
          />
        )}

        {isMultiple && (
          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                className="w-full px-4 py-3 md:text-[17px] rounded-md focus:outline-none focus:ring-2 bg-white"
                placeholder="Recipient Address"
                value={tempAddress}
                onChange={(e) => setTempAddress(e.target.value)}
              />
              <button
                type="button"
                onClick={handleMultipleAddress}
                className="bg-primary text-white px-4 rounded-md"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {recipientAddresses.map((addr, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-primary/15 px-2 py-1 rounded-md text-primary"
                >
                  <span>{addr}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setRecipientAddresses((prev) =>
                        prev.filter((_, i) => i !== idx)
                      )
                    }
                    className="ml-2 text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="inline-block">
          <label className="text-sm font-medium">
            <input
              type="checkbox"
              checked={isMultiple}
              onChange={() => setIsMultiple(!isMultiple)}
              className="mr-2"
            />
            Multiple Delivery Stop
          </label>
        </div>

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

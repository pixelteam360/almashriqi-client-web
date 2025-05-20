/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useState } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import Link from "next/link";
import { AlarmClock, CarFront, MapPin, Weight } from "lucide-react";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";
import Spinner from "@/components/common/Spinner";
import { serviceType, timeType } from "@/constants/common";
import { useCalculatePriceMutation } from "@/redux/features/common/commonApi";
import { useAppDispatch } from "@/redux/hooks";
import { setDeliveryData } from "@/redux/features/common/commonSlice";

const PriceCalculationl = () => {
  const [isReturnTrip, setIsReturnTrip] = useState(false);
  const [returnSame, setReturnSame] = useState(false);
  const [isMultiple, setIsMultiple] = useState(false);
  const [pickup, setPickup] = useState("");
  const [postCodes, setPostCodes] = useState<string[]>([]);
  const [result, setResult] = useState<any>();
  const [calculate] = useCalculatePriceMutation();
  const dispatch = useAppDispatch();

  const pickupRef = useRef<HTMLInputElement>(null);
  const deliveryRef = useRef<HTMLInputElement>(null);

  const pickupAutoRef = useRef<google.maps.places.Autocomplete | null>(null);
  const deliveryAutoRef = useRef<google.maps.places.Autocomplete | null>(null);

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
    const toastId = toast.loading("Calculating price...");

    if (!pickup) {
      toast.error("Pickup postcode is missing", { id: toastId });
      return;
    }

    if (postCodes.length === 0) {
      toast.error("Please add at least one delivery postcode", { id: toastId });
      return;
    }

    const payload = {
      ...data,
      pickup,
      delivery: postCodes,
      returnTrip: isReturnTrip,
      returnToSameLocation: returnSame,
      country: "United Kingdom",
    };

    try {
      const response = await calculate(payload).unwrap();
      setResult({
        price: response.data.result2.totalPrice,
        distance: response.data.result2.totalDistance,
      });
      dispatch(
        setDeliveryData({
          totalPrice: response.data.result2.totalPrice,
          totalDistance: response.data.result2.totalDistance,
          deliveryPostCode: postCodes,
          pickupPostCode: pickup,
          service: data.service,
        })
      );
      toast.success("Calculation successful", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to calculate", { id: toastId });
    }
  };

  if (!isLoaded) return <Spinner />;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md">
      <MyFormWrapper onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {/* Pickup */}
          <div className="relative">
            <label className="absolute -top-3 left-3 z-10 bg-white px-2">
              Pickup
            </label>
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
                className="border rounded-2xl py-7 px-7 text-sm w-full"
                placeholder="Enter UK Postcode"
              />
            </Autocomplete>
            <MapPin className="absolute top-7 left-[3px] text-primary w-5" />
          </div>

          <div className="relative">
            <label className="absolute -top-3 left-3 z-10 bg-white px-2">
              Delivery
            </label>
            <Autocomplete
              onLoad={(autocomplete) =>
                (deliveryAutoRef.current = autocomplete)
              }
              onPlaceChanged={() => handlePlaceSelect("delivery")}
              options={{
                componentRestrictions: { country: "uk" },
                types: ["postal_code"],
              }}
            >
              <input
                ref={deliveryRef}
                name="delivery"
                className="border rounded-2xl py-7 px-7 text-sm w-full"
                placeholder="Enter UK Postcode"
              />
            </Autocomplete>
            <MapPin className="absolute top-7 left-[3px] text-primary w-5" />
          </div>

          {/* Selected Postcodes */}
          {isMultiple && (
            <div className="flex flex-wrap gap-2 items-center">
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

          {/* Weight */}
          <div className="relative">
            <label className="absolute -top-3 left-3 z-10 bg-white px-2">
              Weight
            </label>
            <MyFormInput
              name="weight"
              placeholder="Weight (KG)"
              inputClassName="border rounded-2xl py-7 px-7 text-sm"
            />
            <Weight className="absolute top-7 left-[3px] text-primary w-5" />
          </div>

          {/* Waiting Time */}
          <div className="relative">
            <label className="absolute -top-3 left-3 z-10 bg-white px-2">
              Waiting Time
            </label>
            <MyFormInput
              name="waitingTime"
              placeholder="Waiting Time"
              inputClassName="border rounded-2xl py-7 px-7 text-sm"
            />
            <AlarmClock className="absolute top-7 left-[3px] text-primary w-5" />
          </div>

          {/* Service Type */}
          <div className="relative">
            <label className="absolute -top-3 left-3 z-10 bg-white px-2">
              Service
            </label>
            <MyFormSelect
              name="service"
              options={serviceType}
              selectClassName="border rounded-2xl py-7 px-7 text-sm w-full"
            />
            <CarFront className="absolute top-7 left-[3px] text-primary w-5" />
          </div>

          {/* Time Range */}
          <div className="flex gap-3 items-center">
            <div className="relative">
              <label className="absolute -top-3 left-3 z-10 bg-white px-2">
                Time
              </label>
              <MyFormSelect
                name="time"
                options={timeType}
                selectClassName="border rounded-2xl py-7 px-7 text-sm w-full"
              />
            </div>
            <span className="mb-4">to</span>
            <div className="relative">
              <MyFormSelect
                name="toTime"
                options={timeType}
                selectClassName="border rounded-2xl py-7 px-7 text-sm w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
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

          <div className="inline-block">
            <label className="text-sm font-medium">
              <input
                type="checkbox"
                checked={isReturnTrip}
                onChange={() => setIsReturnTrip(!isReturnTrip)}
                className="mr-2"
              />
              Return Trip
            </label>
          </div>

          {isReturnTrip && (
            <div className="inline-block">
              <label className="text-sm font-medium">
                <input
                  type="checkbox"
                  checked={returnSame}
                  onChange={() => setReturnSame(!returnSame)}
                  className="mr-2"
                />
                Return to Same Location
              </label>
            </div>
          )}
        </div>

        <div className="flex md:flex-row flex-col justify-center mt-8 gap-7 items-center">
          <button className="px-10 py-4 bg-primary rounded-2xl text-white font-bold">
            Check Price
          </button>

          {result && (
            <div className="flex md:flex-row flex-col md:items-end items-center gap-6">
              <div className="space-y-2 md:text-start text-center">
                <p>Result</p>
                <h3 className="text-xl text-primary font-bold">
                  {result.price}£
                </h3>
              </div>
              <Link
                href={{
                  pathname: "/delivery-form",
                  query: { price: result.price, distance: result.distance },
                }}
                className="text-primary underline "
              >
                Proceed to payment
              </Link>
            </div>
          )}
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default PriceCalculationl;

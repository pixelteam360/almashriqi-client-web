/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import banner from "../../../../assets/images/need-same-day.png";
import Image from "next/image";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import MyFormInput from "@/components/form/MyFormInput";
import { FieldValues } from "react-hook-form";
import MyFormSelect from "@/components/form/MyFormSelect";
import { AlarmClock, CarFront, MapPin, Weight } from "lucide-react";
import { serviceType } from "@/constants/common";
// import countryList from "react-select-country-list";
import { useState } from "react";
// import Select from "react-select";
import { toast } from "sonner";
import { useCalculatePriceMutation } from "@/redux/features/common/commonApi";
import { parse, isValid } from "date-fns";
import Link from "next/link";

const Banner = () => {
  const [isreturnTrip, setIsreturnTrip] = useState<boolean>(false);
  const [postCode, setPostCode] = useState<string[]>([]);
  const [returnSame, setReturnSame] = useState<boolean>(false);
  const [result, setResult] = useState<any>("");
  const [calculate] = useCalculatePriceMutation();

  const handleCheckboxChange = (data: string) => {
    if (data === "returnToSameLocation") {
      setReturnSame(!returnSame);
    } else {
      setIsreturnTrip(!isreturnTrip);
    }
  };

  // handle post code
  const handlePosrCode = (data: FieldValues) => {
    const code = [...postCode, data.delivery];
    setPostCode(code);
  };

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Calculation...");

    const parsedTime = parse(data.time, "HH:mm", new Date());

    const validateTime = isValid(parsedTime) && data.time.length === 5;

    if (!validateTime) {
      toast.error(`Time should be in "HH:MM" format`, { id: toastId });
      return;
    }

    if (postCode.length < 1) {
      toast.error(`Delivery post conde not found`, { id: toastId });
      return;
    }

    const returnTrip = isreturnTrip;
    const returnToSameLocation = returnSame;

    const { toTime, ...rest } = data;

    const delivery = postCode.at(-1);

    const sendableData = {
      ...rest,
      delivery,
      country: "United Kingdom",
      returnTrip,
      returnToSameLocation,
    };

    try {
      const res = await calculate(sendableData).unwrap();

      if (res) {
        toast.success("Calculation success", { id: toastId });
        setResult(res.data);
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to Calculate", { id: toastId });
    }
  };

  return (
    <div className="">
      <div className="flex md:flex-row flex-col-reverse items-center gap-7 md:mb-24 mb-10">
        <div className="md:w-3/5 space-y-6">
          <h1 className="md:text-5xl text-2xl md:text-start text-center md:font-semibold font-medium text-secondary leading-snug md:leading-[4.2rem]">
            Need To Send Or Receive A Parcel Quickly? Choose Us For Fast And
            Reliable Service!
          </h1>
          <p className="md:text-start text-center">
            Experience the perfect blend of speed, safety, and satisfaction—your
            parcels delivered right to your doorstep.
          </p>

          <div className="md:text-start text-center">
            <MyBtn name="Download App" />
          </div>
        </div>

        <div className="md:w-2/5">
          <Image src={banner} alt="banner" height={1000} width={1000} />
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse gap-6 bg-white rounded-3xl pt-12 pb-3 px-4 shadow-md">
        <div className="md:w-2/3">
          <MyFormWrapper onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              <div className="relative">
                <p className="absolute -top-3 left-3 z-10 bg-white px-2">
                  PickUp
                </p>
                <MyFormInput
                  name="pickup"
                  inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
                  placeholder="enter Postcode"
                />
                <MapPin className="absolute top-7 left-[3px] text-primary w-5" />
              </div>
              <div className="relative">
                <p className="absolute -top-3 left-3 z-10 bg-white px-2">
                  Weight
                </p>
                <MyFormInput
                  name="weight"
                  inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
                  placeholder="weight (KG)"
                />
                <Weight className="absolute top-7 left-[3px] text-primary w-5" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="relative">
                  <p className="absolute -top-3 left-3 z-10 bg-white px-2">
                    Time
                  </p>
                  <MyFormInput
                    name="time"
                    inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
                    placeholder="hour"
                  />
                  <AlarmClock className="absolute top-7 left-[3px] text-primary w-5" />
                </div>
                <p className="text-xl mb-6">to</p>
                <div className="relative">
                  <MyFormInput
                    name="toTime"
                    inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
                    placeholder="hour"
                  />
                  <AlarmClock className="absolute top-7 left-[3px] text-primary w-5" />
                </div>
              </div>
              <div className="relative">
                <p className="absolute -top-3 left-3 z-10 bg-white px-2">
                  Waiting Time
                </p>
                <MyFormInput
                  name="waitingTime"
                  inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
                  placeholder="waiting time"
                />
                <AlarmClock className="absolute top-7 left-[3px] text-primary w-5" />
              </div>
              <div className="relative ">
                <p className="absolute -top-3 left-3 z-10 bg-white px-2">
                  Service
                </p>
                <MyFormSelect
                  name="service"
                  options={serviceType}
                  selectClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 px-7 text-sm text-gray-400"
                />
                <CarFront className="absolute top-7 left-[3px] text-primary w-5" />
              </div>

              <div className="flex w-full gap-7">
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      checked={isreturnTrip}
                      onChange={() => handleCheckboxChange("returnSame")}
                    />
                    <p>Return Trip</p>
                  </div>

                  {isreturnTrip && (
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        checked={returnSame}
                        onChange={() =>
                          handleCheckboxChange("returnToSameLocation")
                        }
                      />
                      <p>Return To Same Location</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-8 items-center">
              <div className="inline-block">
                <button className="px-16 whitespace-nowrap py-7 bg-primary rounded-2xl text-white font-bold">
                  check price
                </button>
              </div>
              <div>
                {result && (
                  <div className="flex gap-7 items-end">
                    <div className="">
                      <p>Result</p>
                      <h3 className="text-xl text-primary">{result}£</h3>
                    </div>
                    <div className="inline-block">
                      <Link href={{pathname: "/delivery-form", query: {price: result}}}>
                        <p className="text-primary underline text-lg">
                          Proceed to payment
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </MyFormWrapper>
        </div>

        <div className="md:w-1/3">
          <MyFormWrapper onSubmit={handlePosrCode} className="h-full">
            <div className="relative flex gap-2">
              <p className="absolute -top-3 left-3 z-10 bg-white px-2">
                Delivery
              </p>
              <div className="w-full">
                <MyFormInput
                  name="delivery"
                  inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
                  placeholder="enter Postcode"
                />
              </div>
              <MapPin className=" absolute top-7 left-[3px] text-primary w-5" />
              <div className="inline-block">
                <button className="bg-primary text-white px-3 py-2 rounded-lg">
                  Add
                </button>
              </div>
            </div>
            <div className="relative h-2/3 border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7">
              <p className="absolute -top-3 left-3 z-10 bg-white px-2 text-base">
                Delivery Post Cods
              </p>

              <div className="flex gap-3">
                {postCode?.map((item, idx) => (
                  <p key={idx} className="bg-primary/15 px-2 rounded-md text-primary">{item}</p>
                ))}
              </div>
            </div>
          </MyFormWrapper>
        </div>
      </div>
    </div>
  );
};

export default Banner;

"use client";
import MyBtn from "@/components/common/MyBtn";
import React from "react";
import banner from "../../../../assets/images/need-same-day.png";
import Image from "next/image";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import MyFormInput from "@/components/form/MyFormInput";
import { FieldValues } from "react-hook-form";
import MyFormSelect from "@/components/form/MyFormSelect";
import { AlarmClock, CarFront, MapPin, Weight } from "lucide-react";
import { serviceType } from "@/constants/common";

const Banner = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
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

      <div className="bg-white rounded-3xl pt-12 pb-3 px-4 shadow-md">
        <MyFormWrapper
          onSubmit={handleSubmit}
          className="flex justify-evenly lg:flex-nowrap flex-wrap gap-4"
        >
          <div className="relative">
            <p className="absolute -top-3 left-3 z-10 bg-white px-2">PickUp</p>
            <MyFormInput
              name="name"
              inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
              placeholder="enter Postcode"
            />
            <MapPin className="absolute top-7 left-[3px] text-primary w-5" />
          </div>
          <div className="relative">
            <p className="absolute -top-3 left-3 z-10 bg-white px-2">
              Delivery
            </p>
            <MyFormInput
              name="name"
              inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
              placeholder="enter Postcode"
            />
            <MapPin className="absolute top-7 left-[3px] text-primary w-5" />
          </div>
          <div className="relative">
            <p className="absolute -top-3 left-3 z-10 bg-white px-2">weight</p>
            <MyFormInput
              name="name"
              inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
              placeholder="weight (KG)"
            />
            <Weight className="absolute top-7 left-[3px] text-primary w-5" />
          </div>
          <div className="relative">
            <p className="absolute -top-3 left-3 z-10 bg-white px-2">time</p>
            <MyFormInput
              name="name"
              inputClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7"
              placeholder="hour"
            />
            <AlarmClock className="absolute top-7 left-[3px] text-primary w-5" />
          </div>
          <div className="relative ">
            <p className="absolute -top-3 left-3 z-10 bg-white px-2">Service</p>
            <MyFormSelect
              name="name"
              options={serviceType}
              selectClassName="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 md:w-44 w-52 px-7 text-sm text-gray-400"
            />
            <CarFront className="absolute top-7 left-[3px] text-primary w-5" />
          </div>

          <div className="inline-block">
            <button className="px-16 whitespace-nowrap py-7 bg-primary rounded-2xl text-white font-bold">
              check price
            </button>
          </div>
        </MyFormWrapper>
      </div>
    </div>
  );
};

export default Banner;

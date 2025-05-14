"use client";
import MyBtn from "@/components/common/MyBtn";
import banner from "../../../../assets/images/need-same-day.png";
import Image from "next/image";
import PriceCalculationl from "./PriceCalculationl";

const Banner = () => {
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

      <div className="max-w-4xl mx-auto py-3 rounded-xl bg-[#E8F0FE] md:mb-12 mb-6 flex justify-center items-center gap-8 md:flex-row flex-col">
        <h3 className="text-xl font-medium text-[#663C00] text-center">
          Please download the app to access all features.
        </h3>
        <div className="md:text-start text-center">
          <MyBtn name="Download App" />
        </div>
      </div>

      <PriceCalculationl />
    </div>
  );
};

export default Banner;

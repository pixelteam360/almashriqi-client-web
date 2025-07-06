import SectionTitle from "@/components/common/SectionTitle";
import carLogo from "../../../../assets/images/minilogo.png";
import bike from "../../../../assets/images/motoBike.jpeg";
import car from "../../../../assets/images/car.jpeg";
import smallVan from "../../../../assets/images/smallVan.jpeg";
import mediumVan from "../../../../assets/images/mediunVan.jpeg";
import Image from "next/image";
import MyTitle from "@/components/common/MyTitle";
import MyBtn from "@/components/common/MyBtn";

const Service = () => {
  return (
    <div className="space-y-20">
      <div className="flex md:flex-row flex-col-reverse md:gap-3 gap-2 justify-between items-center">
        <SectionTitle main="Services" sub="we offer" />

        <Image src={carLogo} alt="logo" height={100} width={100} className="bg-white rounded-full shadow-md"/>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-7 gap-4">
        <div className="space-y-4">
          <Image
            src={bike}
            width={500}
            height={500}
            alt="image"
            className="w-full h-48 rounded-xl"
          />
          <MyTitle title="Moto bike" />
          <p className="text-[#525050] md:text-start text-center">
            Quick and nimble deliveries for urgent needs. Perfect for small
            packages and last-mile logistics.
          </p>
        </div>
        <div className="space-y-4">
          <Image
            src={car}
            width={500}
            height={500}
            alt="image"
            className="w-full h-48 rounded-xl"
          />
          <MyTitle title="Car" />
          <p className="text-[#525050] md:text-start text-center">
            Ideal for envelopes, packages, small parcels and non palletised
            items. Max total carrying weight of combined multiple items: 50 kg
            (no single item should be more than 50kg).
          </p>
        </div>
        <div className="space-y-4">
          <Image
            src={smallVan}
            width={500}
            height={500}
            alt="image"
            className="w-full h-48 rounded-xl"
          />
          <MyTitle title="Small Van" />
          <p className="text-[#525050] md:text-start text-center">
            Load length 1.4m, Width 1.2m, Height 1.1m. Max Load 400kg - 1
            Pallet.
          </p>
        </div>
        <div className="space-y-4">
          <Image
            src={mediumVan}
            width={500}
            height={500}
            alt="image"
            className="w-full h-48 rounded-xl"
          />
          <MyTitle title="Medium Van" />
          <p className="text-[#525050] md:text-start text-center">
            Load length 2m, Width 1.25m, Height 1.4m. Max Load 800kg - 2
            Standard Pallets. / 2 Euro Pallets.
          </p>
        </div>
      </div>

      <div className=" md:w-2/3 space-y-4">
        <MyTitle title="Medical & Healthcare Deliveries" />
        <p className="text-lg font-semibold text-[#525050] md:text-start text-center">
          Sensitive, time-critical deliveries handled with care. Our trained
          drivers manage medical equipment, lab samples, and pharmacy items with
          confidentiality and precision.
        </p>
      </div>

      <div className="flex">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <MyTitle title="Custom & Multi-Stop Services" />
          <p className="text-lg font-semibold text-[#525050] md:text-start text-center">
            Have something unique? Need multiple drops in one route? We offer
            flexible delivery options to meet your specific needs.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <MyBtn name="Download App" />
      </div>
    </div>
  );
};

export default Service;

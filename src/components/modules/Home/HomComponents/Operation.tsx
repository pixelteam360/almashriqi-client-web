import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import carLogo from "../../../../assets/images/car-logo.png";
import home1 from "../../../../assets/images/home1.png";
import home2 from "../../../../assets/images/home2.png";
import home3 from "../../../../assets/images/home3.png";
import arrow1 from "../../../../assets/images/Vector2.png";
import arrow2 from "../../../../assets/images/Vector3.png";
import MyTitle from "@/components/common/MyTitle";

const Operation = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Image src={carLogo} alt="logo" height={150} width={150} />
        <SectionTitle main="Operation" sub="Mode" />
        <div></div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-12 gap-6 md:mt-24 mt-10 items-center">
        <div className="md:w-3/5 mx-auto md:space-y-8 space-y-5">
          <div className="flex gap-5">
            <h2 className="w-12 h-12 rounded-full bg-primary flex justify-center items-center text-2xl text-white">
              1
            </h2>
            <MyTitle title="PickUP" />
          </div>
          <p className="text-grayText">
            Seamless parcel pickup from your designated location. Our team
            ensures safe handling and timely collection.
          </p>
        </div>

        <div className="flex md:justify-end items-center">
          <Image
            src={home1}
            alt="image"
            height={500}
            width={500}
            className="w-96"
          />
        </div>

        <div className="flex md:justify-start items-center">
          <Image
            src={home2}
            alt="image"
            height={500}
            width={500}
            className="w-96"
          />
        </div>

        <div className="md:w-3/5 mx-auto md:space-y-8 space-y-5 relative ">
          <Image
            src={arrow1}
            alt="arrow"
            height={1500}
            width={1500}
            className="absolute z-10 -top-[250px] -left-full w-full h-full "
          />

          <div className="flex gap-5">
            <h2 className="w-12 h-12 rounded-full bg-primary flex justify-center items-center text-2xl text-white">
              2
            </h2>
            <MyTitle title="Warehouse" />
          </div>
          <p className="text-grayText">
            Secure storage and efficient management of your parcels. Our
            warehouse system streamlines inventory and readiness for delivery.
          </p>

          <Image
            src={arrow2}
            alt="arrow"
            height={1500}
            width={1500}
            className="absolute z-10 -bottom-[250px] -left-full w-full h-full "
          />
        </div>

        <div className="md:w-3/5 mx-auto md:space-y-8 space-y-5">
          <div className="flex gap-5">
            <h2 className="w-12 h-12 rounded-full bg-primary flex justify-center items-center text-2xl text-white">
              3
            </h2>
            <MyTitle title="Delivery" />
          </div>
          <p className="text-grayText">
            Reliable and timely delivery to your customers. We track every step,
            ensuring your parcels arrive safely and on schedule
          </p>
        </div>

        <div className="flex md:justify-end items-center">
          <Image
            src={home3}
            alt="image"
            height={500}
            width={500}
            className="w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Operation;

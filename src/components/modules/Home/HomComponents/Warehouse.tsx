import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import map from "../../../../assets/images/map.png";
import MyBtn from "@/components/common/MyBtn";

const Warehouse = () => {
  return (
    <div className="space-y-20 bg-[#f7f7f7] my:mp-20 py-12 ">
      <div className="text-center">
        <SectionTitle main="Warehouse" sub="Onsite" />
      </div>

      <div className="flex justify-center">
        <Image src={map} alt="map" height={1000} width={1000} />
      </div>

      <div className="flex justify-center">
        <MyBtn name="Download App" />
      </div>
    </div>
  );
};

export default Warehouse;

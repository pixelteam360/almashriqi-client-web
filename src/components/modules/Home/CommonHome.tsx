import Banner from "./HomComponents/Banner";
import FAQ from "./HomComponents/FAQ";
import Operation from "./HomComponents/Operation";
import Service from "./HomComponents/Service";
import Warehouse from "./HomComponents/Warehouse";

const CommonHome = () => {
  return (
    <div className="space-y-24">
      <Banner />
      <Service />
      <Operation />
      <Warehouse />
      <FAQ />
    </div>
  );
};

export default CommonHome;

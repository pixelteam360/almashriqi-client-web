import MyTitle from "@/components/common/MyTitle";
import DeliveryForm from "@/components/modules/Delivery/DeliveryForm";

const page = () => {
  return (
    <div>
      <div className="flex justify-center"><MyTitle title="PickUp Request" /></div>
      <DeliveryForm />
    </div>
  );
};

export default page;

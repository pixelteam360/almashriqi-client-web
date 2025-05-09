import MyTitle from "@/components/common/MyTitle";
import CommonCheckout from "@/components/modules/Checkout/CommonCheckout";

const page = () => {
  return (
    <div>
      <div className="flex justify-center md:my-12 my-5">
        <MyTitle title="Credit/Debit Card" />
      </div>
        <CommonCheckout /> 
    </div>
  );
};

export default page;

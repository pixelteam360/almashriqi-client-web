import MyTitle from "@/components/common/MyTitle";
import CheckoutForm from "@/components/modules/Checkout/CheckoutForm";

const page = () => {
  return (
    <div>
      <div className="flex justify-center md:my-12 my-5">
        <MyTitle title="Credit/Debit Card" />
      </div>
        <CheckoutForm /> 
    </div>
  );
};

export default page;

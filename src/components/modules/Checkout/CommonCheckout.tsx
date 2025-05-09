"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Log the environment variable
console.log(
  "Stripe Publishable Key:",
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

const CommonCheckout = () => {
  if (!stripePromise) {
    return <div>Error: Stripe publishable key is missing.</div>;
  }

  return (
    <div className="p-4">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CommonCheckout;
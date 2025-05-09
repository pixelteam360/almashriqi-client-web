"use client";
import {
  useAfterPaymentMutation,
  usePaymentMutation,
} from "@/redux/features/common/commonApi";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface PaymentIntentResponse {
  clientSecret: string;
}

const CheckoutForm = () => {
  const price = useSearchParams().get("price");
  const requestId = useSearchParams().get("id");
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [afterPayment] = useAfterPaymentMutation();
  const [payment] = usePaymentMutation();

  const priceInt = parseInt(price!, 10);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe has not loaded. Please try again.");
      return;
    }

    setLoading(true);

    try {
      const res = await payment({ amount: price }).unwrap();

      if (!res) {
        throw new Error("Failed to create PaymentIntent");
      }

      const { clientSecret }: PaymentIntentResponse = await res?.data;

      if (!clientSecret) {
        throw new Error("Invalid response from server");
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        setError(result.error.message || "Payment failed");
      } else if (result.paymentIntent?.status === "succeeded") {
        // console.log("Payment successful:", result.paymentIntent);
        await afterPayment({
          orderId: requestId,
          paymentInt: result.paymentIntent.id,
          amount: priceInt,
        }).unwrap();
        window.location.href = "/payment-success";
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 bg-white shadow rounded"
    >
      {error && <div className="text-red-600">{error}</div>}
      <div className="p-4 border rounded">
        <CardElement options={cardElementOptions} />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-2 px-4 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : `Pay ${price}£`}
      </button>
    </form>
  );
};

export default CheckoutForm;

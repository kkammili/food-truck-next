import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Payments({
  onPaymentSuccess,
  isAddressComplete,
  isAddressValid,
  shippingAddress,
  clientSecret
}) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPaymentValid, setIsPaymentValid] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [paymentStatus, setPaymentStatus] = React.useState(null);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }else{
      console.log("Client secret", clientSecret)
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handlePaymentElementChange = (event) => {
    setIsPaymentValid(event.complete);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    // Validate address
    if (!isAddressComplete || !shippingAddress || !isAddressValid) {
      setMessage("Please complete and validate the shipping address");
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure this matches your home page URL
          return_url: "/",
          payment_method_data: {
            billing_details: {
              address: {
                country: "US", // Add the country code here
              },
            },
          },
        },
      });

      if (error) {
        const errorMessage = error.message || "An unexpected error occurred.";
        setMessage(errorMessage);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        if (onPaymentSuccess) onPaymentSuccess(shippingAddress);
      } else {
        // Handle other statuses (requires_action, processing, etc.)
        setMessage("Payment requires additional action");
        setPaymentStatus("processing");
      }
      // Remove the else block - Stripe will handle redirects
    } catch (err) {
      setMessage("Payment processing failed");
      setPaymentStatus("failure");
    } finally {
      setIsLoading(false);
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div className="payment-section">
      <h2 className="section-header">Payment</h2>
      <div className="stripe-element-container">
        <PaymentElement
          id="payment-element"
          options={{
            layout: "tabs",
            fields: {
              billingDetails: {
                address: {
                  country: "never",
                },
              },
            },
          }}
          onChange={handlePaymentElementChange}
        />
      </div>

      <button
        className="payment-btn"
        disabled={
          isLoading ||
          !stripe ||
          !elements ||
          !isAddressComplete ||
          !isPaymentValid ||
          !isAddressValid
        }
        onClick={handleSubmit}
        id="submit"
      >
        {isLoading && <span className="spinner"></span>}
        Pay now
      </button>

      {message && (
        <div
          className={`payment-message ${message.includes("succeeded") ? "success" : "error"}`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

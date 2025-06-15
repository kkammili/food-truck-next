import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { setPaymentStatus } from "../../store/reducers/paymentStatusSlice";
import { toast } from "react-toastify";

export default function Payments({
  onPaymentSuccess,
  isAddressComplete,
  isAddressValid,
  shippingAddress,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPaymentValid, setIsPaymentValid] = React.useState(false);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
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
          return_url: "http://localhost:3000/",
          payment_method_data: {
            billing_details: {
              name: shippingAddress.name,
              address: {
                line1: shippingAddress.address.line1,
                line2: shippingAddress.address.line2 || "",
                city: shippingAddress.address.city,
                state: shippingAddress.address.state,
                postal_code: shippingAddress.address.postal_code,
                country: shippingAddress.address.country,
              },
              phone: shippingAddress.phone,
            },
          },
        },
      });

      if (error) {
        setMessage(error.message || "An unexpected error occurred.");
        toast.error(message);
      } else if (onPaymentSuccess) {
        onPaymentSuccess(shippingAddress);
        dispatch(setPaymentStatus("success"));
        window.location.href = "http://localhost:3000/";
      }
    } catch (err) {
      setMessage("Payment processing failed");
      dispatch(setPaymentStatus("failure"));
      window.location.href = "http://localhost:3000/";
    } finally {
      setIsLoading(false);
    }
    setIsLoading(false);
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
                address: "never",
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

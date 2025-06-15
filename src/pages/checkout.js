import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Payments from "../app/components/Payments";
import Address from "../app/components/Address";
import "../app/styles/_checkout.scss";

import { clearCart } from "../store/actions/cartActions";
import { clearShippingAddress } from "../store/actions/checkoutActions";

import paymentIntent from "./api/create-payment-intent";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function App() {
  const dispatch = useDispatch();
  // Access checkout state safely
  const { shippingAddress, isAddressComplete } = useSelector(
    (state) => state.checkout.checkout,
  );
  const cartItems = useSelector((state) => state.cart.items);
  const [orderDetails, setOrderDetails] = React.useState(null);
  const [clientSecret, setClientSecret] = React.useState("");

  // React.useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   // get items and change body
  //   fetch("/api/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const handlePaymentSuccess = (address) => {
    // Create order object with shipping address
    const order = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      items: cartItems,
      shippingAddress: address,
      total: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ),
    };

    setOrderDetails(order);
    dispatch(clearCart());
    dispatch(clearShippingAddress());

    // In real app, you would send this to your backend
    console.log("Order created:", order);
  };

  return (
    <div className="payment-container">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Address />
          <Payments
            onPaymentSuccess={handlePaymentSuccess}
            isAddressComplete={isAddressComplete}
            shippingAddress={shippingAddress}
          />

          {orderDetails && (
            <div className="order-confirmation">
              <h2>Order Confirmation</h2>
              <p>Order ID: {orderDetails.id}</p>
              <p>Shipping to: {orderDetails.shippingAddress.name}</p>
              <p>Address: {orderDetails.shippingAddress.address.line1}</p>
            </div>
          )}
        </Elements>
      )}
    </div>
  );
}

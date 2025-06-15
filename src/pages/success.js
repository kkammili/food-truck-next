import { useSelector } from "react-redux";

export default function SuccessPage() {
  const { shippingAddress } = useSelector((state) => state.checkout);

  return (
    <div className="success-container">
      <h1>Payment Successful!</h1>
      {shippingAddress && (
        <div className="shipping-details">
          <h2>Shipping to:</h2>
          <p>{shippingAddress.name}</p>
          <p>{shippingAddress.address.line1}</p>
          {shippingAddress.address.line2 && (
            <p>{shippingAddress.address.line2}</p>
          )}
          <p>
            {shippingAddress.address.city}, {shippingAddress.address.state}{" "}
            {shippingAddress.address.postal_code}
          </p>
          <p>{shippingAddress.address.country}</p>
          <p>Phone: {shippingAddress.phone}</p>
        </div>
      )}
    </div>
  );
}
import React from "react";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <div className="success-page">
      <h1>Payment Successful!</h1>
      <h2>Order Details</h2>
      <p>Order ID: {query.orderId}</p>
      <p>Shipping to: {query.name}</p>
      <p>Address: {query.line1}, {query.city}, {query.state}, {query.postal_code}, {query.country}</p>
      <p>Phone: {query.phone}</p>
    </div>
  );
};

export default Success;

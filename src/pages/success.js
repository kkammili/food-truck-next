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
      <p>
        Address: {query.line1}, {query.city}, {query.state}, {query.postal_code}
        , {query.country}
      </p>
      <p>Phone: {query.phone}</p>
    </div>
  );
};

export default Success;

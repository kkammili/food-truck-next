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

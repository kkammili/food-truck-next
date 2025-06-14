import { AddressElement } from "@stripe/react-stripe-js";

const AddressForm = () => {
  return (
    <div className="shipping-section">
      <h2 className="section-header">Shipping</h2>
      <div className="stripe-element-container">
        <AddressElement
          options={{
            mode: "shipping",
            fields: {
              phone: "always",
            },
            validation: {
              phone: {
                required: "always",
              },
            },
            display: {
              name: "split",
            },
          }}
        />
      </div>
    </div>
  );
};

export default AddressForm;

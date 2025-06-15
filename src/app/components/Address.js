import React from "react";
import { AddressElement } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
// import { setShippingAddress } from "../../store/reducers/checkoutSlice";
import { setShippingAddress } from "../../store/actions/checkoutActions";

const AddressForm = ({ setIsAddressValid }) => {
  const dispatch = useDispatch();

  const handleAddressChange = (event) => {
    if (event.complete) {
      dispatch(setShippingAddress(event.value));
      setIsAddressValid(true);
    } else {
      setIsAddressValid(false);
    }
  };

  return (
    <div>
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
        onChange={handleAddressChange}
      />
    </div>
  );
};

export default AddressForm;

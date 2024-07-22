import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const labelStyle = {
  marginBottom: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const cardElementStyle = {
  base: {
    fontSize: '16px',
    color: '#424770',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#9e2146',
  },
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Handle successful payment here
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="card-element" style={labelStyle}>Credit or Debit Card</label>
      <CardElement id="card-element" style={cardElementStyle} />
      <button type="submit" disabled={!stripe} style={buttonStyle}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;

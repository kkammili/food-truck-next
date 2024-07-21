import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51Pf4OkA9zrLlfrVWfGsEW13ftQYf5jPxdScKYGaivyHGhrUyY7BjMAvQSoEevdvtq40omPQM6QJuEBNgFQWuAUkk00r9CbzzqG');

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;

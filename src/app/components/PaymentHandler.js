'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/reducers/cartReducer';

export default function PaymentHandler() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const stripeStatus = searchParams.get('redirect_status');
    const paymentStatusParam = searchParams.get('payment_status');
    const paymentIntent = searchParams.get('payment_intent');

    let status = null;
    if (stripeStatus) {
      status = stripeStatus === 'succeeded' ? 'success' : 'failure';
    } else if (paymentStatusParam) {
      status = paymentStatusParam;
    } else if (paymentIntent) {
      status = 'success';
    }

    if (status) {
      setPaymentStatus(status);
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', cleanUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    if (paymentStatus === 'success') {
      toast.success('Payment has been successfully processed');
      dispatch(clearCart());
    } else if (paymentStatus === 'failure') {
      toast.error('Payment processing failed');
    }

    if (paymentStatus) {
      const timer = setTimeout(() => setPaymentStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [paymentStatus, dispatch]);

  return null;
}


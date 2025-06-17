"use client";
import React from "react";
import { useEffect } from "react";
import { Features } from "./components/Features";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "./components/Menu";
import MenuDescription from "./components/MenuDescription";
import { Reviews } from "./components/Reviews";
import Faq from "./components/Faq";
import Subscribe from "./components/Subscribe";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/reducers/cartReducer";
// import ClearCart from "./components/ClearCart";
import Hero from "./components/Hero";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  // const dispatch = useDispatch();
  const [paymentStatus, setPaymentStatus] = React.useState(null);

  useEffect(() => {
    // Check all possible status indicators
    const stripeStatus = searchParams.get("redirect_status");
    const paymentStatusParam = searchParams.get("payment_status");
    const paymentIntent = searchParams.get("payment_intent");

    // Determine actual status
    let status = null;
    if (stripeStatus) {
      status = stripeStatus === "succeeded" ? "success" : "failure";
    } else if (paymentStatusParam) {
      status = paymentStatusParam;
    } else if (paymentIntent) {
      // Payment intent exists but no status - assume success
      status = "success";
    }

    if (status) {
      setPaymentStatus(status);

      // Clean the URL parameters
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", cleanUrl);
    }
  }, []);

  useEffect(() => {
    if (paymentStatus === "success") {
      toast.success("Payment has been successfully processed");
      dispatch(clearCart());
    } else if (paymentStatus === "failure") {
      toast.error("Payment processing failed");
    }

    // Clear status after showing
    if (paymentStatus) {
      const timer = setTimeout(() => {
        setPaymentStatus(null);
        // dispatch(clearPaymentStatus());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [paymentStatus]);
  return (
    <>
      <Hero />
      <Features />
      <MenuDescription />
      <Menu />
      <Reviews />
      <Faq />
      <Subscribe />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

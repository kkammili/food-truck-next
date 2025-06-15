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
// import { useDispatch } from "react-redux";
// import ClearCart from "./components/ClearCart";
import Hero from "./components/Hero";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  // const dispatch = useDispatch();
  const [paymentStatus, setPaymentStatus] = React.useState(null);

  useEffect(() => {
    const status = localStorage.getItem("paymentStatus");
    if (status) {
      setPaymentStatus(status);
      localStorage.removeItem("paymentStatus");
    }
  }, []);

  useEffect(() => {
    if (paymentStatus === "success") {
      toast.success("Payment has been successfully processed");
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

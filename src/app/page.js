"use client";

import { Features } from "./components/Features";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { clearPaymentStatus } from "../store/reducers/paymentStatusSlice";
import Menu from "./components/Menu";
import MenuDescription from "./components/MenuDescription";
import { Reviews } from "./components/Reviews";
import Faq from "./components/Faq";
import Subscribe from "./components/Subscribe";
import ClearCart from "./components/ClearCart";

export default function Home() {
  const dispatch = useDispatch();
  const paymentStatus = useSelector((state) => state.paymentStatus.status);

  React.useEffect(() => {
    if (paymentStatus) {
      if (paymentStatus === "success") {
        toast.success("Payment has been successfully processed");
      } else if (paymentStatus === "failure") {
        toast.error("Payment processing failed");
      }
      dispatch(clearPaymentStatus());
    }
  }, [paymentStatus, dispatch]);
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
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
    </>
  );
}

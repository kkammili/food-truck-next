import { Features } from "./components/Features";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import MenuDescription from "./components/MenuDescription";
import { Reviews } from "./components/Reviews";
import Faq from "./components/Faq";
import Subscribe from "./components/Subscribe";
import ClearCart from "./components/ClearCart";

export default function Home() {
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

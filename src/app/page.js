import { Features } from "./components/Features";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import MenuDescription from "./components/MenuDescription";
import { Reviews } from "./components/Reviews";
import Faq from "./components/Faq";
import Subscribe from "./components/Subscribe";

// persisted store
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "../store";

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
    </>
  );
}

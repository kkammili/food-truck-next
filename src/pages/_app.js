import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";
import { Providers } from "../app/Provider";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {pathname === "/checkout" ? (
          <Component {...pageProps} />
        ) : (
          <Providers>
            <Component {...pageProps} />
          </Providers>
        )}
      </PersistGate>
    </Provider>
  );
};

export default MyApp;

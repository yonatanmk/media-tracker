import React from "react";

import Header from "../components/Header";
import "./index.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

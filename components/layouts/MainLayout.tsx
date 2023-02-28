import Head from "next/head";
import React from "react";

import { ConversionBar, Footer, Header } from "../ui/shared";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head children={undefined}></Head>
      <header>
        <ConversionBar />
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

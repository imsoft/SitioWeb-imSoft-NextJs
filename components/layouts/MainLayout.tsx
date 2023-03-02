import React from "react";

import { ConversionBar, Footer, Header } from "../ui/shared";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 z-50">
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

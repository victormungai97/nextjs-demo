/* This file will hold UI for all pages within this folder */

import { ReactNode } from "react";

// Shape of root layout props
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <p>NavBar</p>
      {children}
    </>
  );
};

export default RootLayout;

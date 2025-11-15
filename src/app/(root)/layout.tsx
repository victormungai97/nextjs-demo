/* This file will hold UI for all pages within this folder */

import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to NextJS Demo",
  description: "It's here to show the wonderful capabilities of NextJS",
};

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

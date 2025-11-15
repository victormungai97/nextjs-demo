/* This file will hold UI for all pages within this folder */

import { ReactNode } from "react";

// Shape of dashboard layout props
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <p>Dashboard NavBar</p>
      {children}
    </>
  );
};

export default DashboardLayout;

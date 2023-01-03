import React from "react";
import Navbar from "../Components/Navbar";
function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
export default DefaultLayout;
